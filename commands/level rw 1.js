const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_level1")
    .setDescription("Claim your level reward"),
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

    let timeout = 60480000000000000000000000;

    if (timeout - (Date.now() - data.level1Timeout) > 0) {
      let timeLeft = ms(timeout - (Date.now() - data.level1Timeout));

      await interaction.reply({
        content: `you already claimed this reward come back when ur leveled up.`,
      });
    } else {
      data.level1Timeout = Date.now();
      data.wallet += amount * 3;
      await data.save();

      const weeklyEmbed = new discord.EmbedBuilder()
        .setColor("#F04a0c")
        .setDescription(
          `You recieved a level 1 reward`
        );

      await interaction.reply({
        embeds: [weeklyEmbed],
      });
    }
  },
};
