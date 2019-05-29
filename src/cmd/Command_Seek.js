const Command = require("./Command.js");

/**
 * Class for seek in song command.
 * @extends Command
 */
class StopCommand extends Command {

  /**
   * Constructor.
   * @param {ChatService} chatService - ChatService.
   * @param {PlayerService} playerService - PlayerService.
   */
  constructor(chatService, playerService) {
    super("seek");
    super.help = "seek playback position.";
    super.usage = "<prefix>seek <number>";
    super.alias = ["seek"];
    this.playerService = playerService;
    this.chatService = chatService;
  }

  /**
   * Function to execute this command.
   * @param {String} payload - Payload from the user message with additional information.
   * @param {Message} msg - User message this function is invoked by.
   */
  run(payload, msg) {
    if (isNaN(payload)) {
      this.chatService.simpleNote(msg, "Seek position must be numeric!", this.chatService.msgType.Fail);
      return;
    }
    this.playerService.seek(payload, msg);
  }
}

module.exports = StopCommand;
