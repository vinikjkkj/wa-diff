__d(
  "WAWebActions",
  ["fbt", "$InternalEnum", "WAWebFbtCommon"],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
      "CONTACT_US",
      "DECREASE_PTT_SPEED",
      "GO_TO_NEXT_CHAT",
      "GO_TO_PREV_CHAT",
      "INCREASE_PTT_SPEED",
      "LOGOUT",
      "OPEN_NEW_CHAT",
      "OPEN_NEW_GROUP",
      "OPEN_PROFILE",
      "OPEN_SETTINGS",
      "CLOSE_CHAT",
      "SEARCH",
      "SEARCH_IN_CHAT",
      "TOGGLE_ARCHIVE",
      "TOGGLE_MUTE",
      "TOGGLE_PIN",
      "TOGGLE_UNREAD",
      "OPEN_EMOJI_PANEL",
      "OPEN_GIF_PANEL",
      "OPEN_STICKER_PANEL",
      "TOGGLE_STICKER_MAKER",
      "TOGGLE_COMMAND_PALETTE",
      "LOCK_SCREEN",
      "LABEL_CHAT",
      "TOGGLE_BOLD",
      "TOGGLE_ITALIC",
      "TOGGLE_STRIKETHROUGH",
      "TOGGLE_CODE",
      "TOGGLE_INLINE_CODE",
      "TOGGLE_NUMBERED_LIST",
      "TOGGLE_BULLETED_LIST",
      "TOGGLE_QUOTE",
      "TOGGLE_THEME",
      "ZOOM_IN",
      "ZOOM_OUT",
      "ZOOM_RESET",
      "OPEN_CHAT_INFO",
      "BLOCK_CHAT",
      "REPLY",
      "REPLY_PRIVATE",
      "FORWARD",
      "STAR_MESSAGE",
      "OPEN",
      "OPEN_ATTACHMENT_DROPDOWN",
      "START_PTT_RECORDING",
      "PAUSE_PTT_RECORDING",
      "SEND_PTT",
      "EDIT_LAST_MESSAGE",
      "OPEN_NTH_CHAT",
      "TOGGLE_PRIVACY_MODE",
      "TOGGLE_CALL_CAMERA",
      "TOGGLE_CALL_MUTE",
      "SHOW_CALL_REACTIONS",
      "TOGGLE_RAISE_HAND",
      "START_SCREEN_SHARE",
      "END_CALL",
    ]);
    function u(t) {
      switch (t) {
        case e.TOGGLE_UNREAD:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_MUTE:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_ARCHIVE:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_PIN:
          return s._(/*BTDS*/ "");
        case e.SEARCH:
          return r("WAWebFbtCommon")("Search");
        case e.SEARCH_IN_CHAT:
          return s._(/*BTDS*/ "");
        case e.OPEN_NEW_CHAT:
          return s._(/*BTDS*/ "");
        case e.GO_TO_NEXT_CHAT:
          return s._(/*BTDS*/ "");
        case e.GO_TO_PREV_CHAT:
          return s._(/*BTDS*/ "");
        case e.CLOSE_CHAT:
          return s._(/*BTDS*/ "");
        case e.OPEN_NEW_GROUP:
          return s._(/*BTDS*/ "");
        case e.OPEN_PROFILE:
          return s._(/*BTDS*/ "");
        case e.INCREASE_PTT_SPEED:
          return s._(/*BTDS*/ "");
        case e.DECREASE_PTT_SPEED:
          return s._(/*BTDS*/ "");
        case e.OPEN_SETTINGS:
          return s._(/*BTDS*/ "");
        case e.OPEN_EMOJI_PANEL:
          return s._(/*BTDS*/ "");
        case e.OPEN_GIF_PANEL:
          return s._(/*BTDS*/ "");
        case e.OPEN_STICKER_PANEL:
          return s._(/*BTDS*/ "");
        case e.LOCK_SCREEN:
          return s._(/*BTDS*/ "");
        case e.LABEL_CHAT:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_COMMAND_PALETTE:
          return s._(/*BTDS*/ "");
        case e.ZOOM_IN:
          return s._(/*BTDS*/ "");
        case e.ZOOM_OUT:
          return s._(/*BTDS*/ "");
        case e.ZOOM_RESET:
          return s._(/*BTDS*/ "");
        case e.OPEN_CHAT_INFO:
          return s._(/*BTDS*/ "");
        case e.BLOCK_CHAT:
          return s._(/*BTDS*/ "");
        case e.REPLY:
          return s._(/*BTDS*/ "");
        case e.REPLY_PRIVATE:
          return s._(/*BTDS*/ "");
        case e.FORWARD:
          return s._(/*BTDS*/ "");
        case e.STAR_MESSAGE:
          return s._(/*BTDS*/ "");
        case e.OPEN_ATTACHMENT_DROPDOWN:
          return s._(/*BTDS*/ "");
        case e.START_PTT_RECORDING:
          return s._(/*BTDS*/ "");
        case e.PAUSE_PTT_RECORDING:
          return s._(/*BTDS*/ "");
        case e.SEND_PTT:
          return s._(/*BTDS*/ "");
        case e.EDIT_LAST_MESSAGE:
          return s._(/*BTDS*/ "");
        case e.OPEN_NTH_CHAT:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_PRIVACY_MODE:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_CALL_CAMERA:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_CALL_MUTE:
          return s._(/*BTDS*/ "");
        case e.SHOW_CALL_REACTIONS:
          return s._(/*BTDS*/ "");
        case e.TOGGLE_RAISE_HAND:
          return s._(/*BTDS*/ "");
        case e.START_SCREEN_SHARE:
          return s._(/*BTDS*/ "");
        case e.END_CALL:
          return s._(/*BTDS*/ "");
        default:
          return "";
      }
    }
    ((l.Action = e), (l.getLabel = u));
  },
  226,
);
