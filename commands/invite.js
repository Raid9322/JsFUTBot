const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_invite")
    .setDescription("Invite Me to your server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const inviteRow = new discord.ActionRowBuilder().addComponents(
      new discord.ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(discord.ButtonStyle.Link)
        .setURL(
          "https://discord.com/api/oauth2/authorize?client_id=1068141981475287080&permissions=8&scope=bot"
        )
    );

    await interaction.reply({
      content: "Click the below button to Invite Me to your server",
      components: [inviteRow],
    });
  },
};
