const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_withdraw")
    .setDescription("Withdraw any item")
    .addStringOption((option) =>
      option
        .setName("item")
        .setDescription("Select an item")
        .addChoices(
          {
            name: "bot-trades",
            value: "bot trades",
          },
          {
            name: "packs",
            value: "pack",
          },
          {
            name: "coins",
            value: "coin",
          }
        )
        .setRequired(true)
    )
  .addStringOption((option) =>
      option
        .setName("amount")
        .setDescription("how many?")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let job = interaction.options.getString("item");
    let comment = interaction.options.getString("amount");
    let avatarUrl = interaction.user.avatarURL({ extension: "jpg" });
    let canvas = `**to withdraw your ${encodeURIComponent(comment)} ${job} please make a #claim-reward-ticket thank you**`;
     
      await interaction.reply({
        content: canvas,
         });
  },
};

