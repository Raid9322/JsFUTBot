const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");


module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_msg")
    .setDescription("msg")
    .addStringOption((option) =>
      option
        .setName("msg")
        .setDescription("msg")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let comment = interaction.options.getString("msg");
    let avatarUrl = interaction.user.avatarURL({ extension: "jpg" });
    let canvas2 = `**${encodeURIComponent(comment)}**`;
     
      await interaction.reply({
        content: canvas2,
         });
  },
};

