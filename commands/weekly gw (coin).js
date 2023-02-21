const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_weekly-giveway-coins")
    .setDescription("Claim your weekly reward"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let amount = Math.floor(Math.random() * 1) + 1;

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

    let timeout = 604800000;

    if (timeout - (Date.now() - data.weekly2Timeout) > 0) {
      let timeLeft = ms(timeout - (Date.now() - data.weekly2Timeout));

      await interaction.reply({
        content: `You are on cooldown, please wait for more **${timeLeft}** to use this command again.`,
      });
    } else {
      data.weekly2Timeout = Date.now();
      data.bank += amount * 25000000;
      await data.save();

      const weeklyEmbed = new discord.EmbedBuilder()
        .setColor("#000000")
        .setDescription(
          `You recieved a weekly giveaway reward`
        );

      await interaction.reply({
        embeds: [weeklyEmbed],
      });
    }
  },
};
