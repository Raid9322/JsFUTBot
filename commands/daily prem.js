const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_daily-premium")
    .setDescription("Claim your daily reward"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let amount = Math.floor(Math.random() * 1) + 30;

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

    let timeout = 86400000;

    if (timeout - (Date.now() - data.daily2Timeout) > 0) {
      let timeLeft = ms(timeout - (Date.now() - data.daily2Timeout));

      await interaction.reply({
        content: `You are on cooldown, please wait for more **${timeLeft}** to use this command again.`,
      });
    } else {
      data.daily2Timeout = Date.now();
      data.wallet += amount * 3;
      await data.save();

      const dailyEmbed = new discord.EmbedBuilder()
        .setColor("#F04a0c")
        .setDescription(
          `You recieved a daily reward of ** bot trade ${amount.toLocaleString()}**`
        );

      await interaction.reply({
        embeds: [dailyEmbed],
      });
    }
  },
};
