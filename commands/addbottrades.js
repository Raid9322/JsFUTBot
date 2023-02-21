const schema = require("../schemas/currencySchema");
const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_addcoins")
    .setDescription("Add coins in a user's walet")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select a user").setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("Enter the amount you want to add")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const permission = interaction.member.permissions.has(
      discord.PermissionFlagsBits.ManageGuild
    );
    let user = interaction.options.getUser("user");
    let amount = interaction.options.getInteger("amount");

    let data;
    try {
      data = await schema.findOne({
        userId: user.id,
      });

      if (!data) {
        data = await schema.create({
          userId: user.id,
          guildId: interaction.guild.id,
        });
      }
    } catch (err) {
      console.log(err);
      await interaction.reply({
        content: "There was an error while executing this command...",
        ephemeral: true,
      });
    }

    if (!permission) {
      await interaction.reply({
        content: "You don't have the permissions to use this command...",
        ephemeral: true,
      });
    } else {
      data.bank += amount * 1;
      await data.save();

      const addcoinsEmbed = new discord.EmbedBuilder()
        .setColor("#000000")
        .setDescription(
          `You added **:coin: ${amount.toLocaleString()}** in **${
            user.username
          }'s** bank`
        );

      await interaction.reply({
        embeds: [addcoins],
      });
    }
  },
};
