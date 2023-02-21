const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");


module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_link")
    .setDescription("link urself")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("Enter your username")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let comment = interaction.options.getString("username");
    let avatarUrl = interaction.user.avatarURL({ extension: "jpg" });
    let canvas = `**${encodeURIComponent(comment)} is succesfully linked with wallet**<a:chech_bw:1066026561398128730> `;
     
      await interaction.reply({
        content: canvas,
         });
  },
};

