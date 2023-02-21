const schema = require("../schemas/currencySchema");
const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_wallet")
    .setDescription("Shows the wallet of a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Select a user to view their wallet")
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let user = interaction.options.getUser("user");

    if (!user) {
      user = interaction.user;
    }

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
      await interaction.reply({
        content: "There was an error while executing this command...",
        ephemeral: true,
      });
    }


    const balanceEmbed = new discord.EmbedBuilder()
      .setColor("#000000")
      .setThumbnail(user.displayAvatarURL())
      .setTitle(`__${user.username}\'s wallet__`)
      .setDescription(
        `Bot Trades :robot: : \n __${data.wallet.toLocaleString()}__\n\n coins <:coinemoji:1054305963282268211>  : \n__${data.bank.toLocaleString()}__\n\n JMFUT packs<:pa:1056233847160832060>:\n __${data.pack.toLocaleString()}__\n\n`)
      .setTimestamp();

    await interaction.reply({
      embeds: [balanceEmbed],
    });
  },
};
