const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_sell-bot-trades")
    .setDescription("sell bot trades")

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
    let amount = interaction.options.getInteger("amount");
        let user = interaction.options.getUser("user2");
    let data;
    try {
      data = await schema.findOne({
        userId: interaction.user.id,
      });

       if (!data) {
        data = await schema.create({
          userId: interaction.user.id,
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

    let timeout = 0;

    if (timeout - (Date.now() - data.dailyTimeout) > 0) {
      let timeLeft = ms(timeout - (Date.now() - data.dailyTimeout));

      await interaction.reply({
        content: `You are on cooldown, please wait for more **${timeLeft}** to use this command again.`,
      });
          } else if (amount > data.wallet) {
      await interaction.reply({
        content: "This user doesn't have that much coins in their wallet...",
        ephemeral: true,
      });
    } else {
      data.dailyTimeout = Date.now();
      data.wallet -= amount * 1;
      data.bank += amount * 99000000;
      await data.save();

      const dailyEmbed = new discord.EmbedBuilder()
        .setColor("#000000")
        .setDescription(
                   `You added ** coins  ${amount.toLocaleString()}** in **${
            user.username
          }'s** wallet with 1% taxes`
        );

      await interaction.reply({
        embeds: [dailyEmbed],
        });
    }
  },
};

