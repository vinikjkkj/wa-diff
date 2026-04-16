__d(
  "WAWebBackendJobsCommon",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAStanzaUtils",
    "WAWap",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebSendMsgCommonApi",
    "WAWebSignalCommonErrors",
    "WAWebUserPrefsMeUser",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eCiphertextType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPlaceholderReasonType",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 2;
    function p(e) {
      return e === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE
            .SENDER_KEY_MESSAGE
        : e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
          ? o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE
              .PREKEY_MESSAGE
          : e === o("WAWebBackendJobs.flow").CiphertextType.Msg
            ? o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE.MESSAGE
            : e === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
              ? o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE
                  .MESSAGE_SECRET_MESSAGE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function _(e) {
      var t = e.encMediaType,
        n = e.msgPollType,
        r = e.msgType;
      if (r === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
      if (r === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.MEDIA_EXPRESS_NOTIFY;
      if (n === o("WAWebHandleMsgCommon").POLL_TYPES.creation)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
      if (n === o("WAWebHandleMsgCommon").POLL_TYPES.vote)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE;
      if (t)
        switch (t) {
          case o("WAWebBackendJobs.flow").EncMediaType.Image:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
          case o("WAWebBackendJobs.flow").EncMediaType.Video:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
          case o("WAWebBackendJobs.flow").EncMediaType.Ptv:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
          case o("WAWebBackendJobs.flow").EncMediaType.Audio:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
          case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
          case o("WAWebBackendJobs.flow").EncMediaType.Location:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.LOCATION;
          case o("WAWebBackendJobs.flow").EncMediaType.VCard:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT;
          case o("WAWebBackendJobs.flow").EncMediaType.Document:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
          case o("WAWebBackendJobs.flow").EncMediaType.Url:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
          case o("WAWebBackendJobs.flow").EncMediaType.Call:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.CALL;
          case o("WAWebBackendJobs.flow").EncMediaType.Gif:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF;
          case o("WAWebBackendJobs.flow").EncMediaType.Future:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.FUTURE;
          case o("WAWebBackendJobs.flow").EncMediaType.ContactArray:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT_ARRAY;
          case o("WAWebBackendJobs.flow").EncMediaType.LiveLocation:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIVE_LOCATION;
          case o("WAWebBackendJobs.flow").EncMediaType.ProfilePic:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PROFILE_PIC;
          case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
          case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
          case o("WAWebBackendJobs.flow").EncMediaType.Hsm:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.HSM;
          case o("WAWebBackendJobs.flow").EncMediaType.ProductImage:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
          case o("WAWebBackendJobs.flow").EncMediaType.Template:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE;
          case o("WAWebBackendJobs.flow").EncMediaType.MdAppState:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_APP_STATE;
          case o("WAWebBackendJobs.flow").EncMediaType.MdHistorySync:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_HISTORY_SYNC;
          case o("WAWebBackendJobs.flow").EncMediaType.List:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST;
          case o("WAWebBackendJobs.flow").EncMediaType.ListResponse:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST_REPLY;
          case o("WAWebBackendJobs.flow").EncMediaType.Button:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_MESSAGE;
          case o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE
              .BUTTON_RESPONSE_MESSAGE;
          case o("WAWebBackendJobs.flow").EncMediaType.Order:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.ORDER;
          case o("WAWebBackendJobs.flow").EncMediaType.Product:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
          case o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE
              .INTERACTIVE_RESPONSE_NFM;
          case o("WAWebBackendJobs.flow").EncMediaType.GroupHistory:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.GROUP_HISTORY;
        }
      return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
    }
    function f(e) {
      var t;
      if (e.deviceSentMessage) {
        var n = e.deviceSentMessage.message;
        return n ? f(n) : null;
      } else if (e.ephemeralMessage) {
        var r = e.ephemeralMessage.message;
        return r ? f(r) : null;
      } else if (e.groupMentionedMessage) {
        var a = e.groupMentionedMessage.message;
        return a ? f(a) : null;
      } else if (e.viewOnceMessageV2Extension) {
        var i = e.viewOnceMessageV2Extension.message;
        return i ? f(i) : null;
      } else if (e.viewOnceMessage) {
        var l = e.viewOnceMessage.message;
        return l ? f(l) : null;
      } else if (e.documentWithCaptionMessage) {
        var s = e.documentWithCaptionMessage.message;
        return s ? f(s) : null;
      } else if (e.botInvokeMessage) {
        var u = e.botInvokeMessage.message;
        return u ? f(u) : null;
      } else if (e.associatedChildMessage) {
        var c = e.associatedChildMessage.message;
        return c ? f(c) : null;
      } else if (e.pollCreationOptionImageMessage) {
        var d = e.pollCreationOptionImageMessage.message;
        return d ? f(d) : null;
      } else {
        if (e.imageMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Image;
        if (e.stickerMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Sticker;
        if (e.stickerPackMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.StickerPack;
        if (e.lottieStickerMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Sticker;
        if (e.locationMessage)
          return e.locationMessage.isLive === !0
            ? o("WAWebBackendJobs.flow").EncMediaType.LiveLocation
            : o("WAWebBackendJobs.flow").EncMediaType.Location;
        if (e.contactMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.VCard;
        if (e.contactsArrayMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.ContactArray;
        if (e.documentMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Document;
        if (e.audioMessage)
          return e.audioMessage.ptt === !0
            ? o("WAWebBackendJobs.flow").EncMediaType.Ptt
            : o("WAWebBackendJobs.flow").EncMediaType.Audio;
        if (e.videoMessage)
          return e.videoMessage.gifPlayback === !0
            ? o("WAWebBackendJobs.flow").EncMediaType.Gif
            : o("WAWebBackendJobs.flow").EncMediaType.Video;
        if (e.ptvMessage) return o("WAWebBackendJobs.flow").EncMediaType.Ptv;
        if (e.buttonsMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Button;
        if (e.buttonsResponseMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse;
        if (e.listMessage) return o("WAWebBackendJobs.flow").EncMediaType.List;
        if (e.listResponseMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.ListResponse;
        if (e.orderMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Order;
        if (e.productMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Product;
        if (e.groupInviteMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.Url;
        if (e.interactiveResponseMessage)
          return o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse;
        if (e.messageHistoryBundle)
          return o("WAWebBackendJobs.flow").EncMediaType.GroupHistory;
        if (
          ((t = e.extendedTextMessage) == null ? void 0 : t.matchedText) !=
            null &&
          e.extendedTextMessage.matchedText.trim() !== ""
        )
          return o("WAWebBackendJobs.flow").EncMediaType.Url;
        if (e.questionMessage) {
          var m = e.questionMessage.message;
          return m ? f(m) : null;
        } else if (e.questionReplyMessage) {
          var p = e.questionReplyMessage.message;
          return p ? f(p) : null;
        } else if (e.newsletterAdminProfileMessage) {
          var _ = e.newsletterAdminProfileMessage.message;
          return _ ? f(_) : null;
        }
      }
      return null;
    }
    function g(e) {
      var t = function () {
          switch (e) {
            case o("WAWebBackendJobs.flow").EncMediaType.Image:
              return "image";
            case o("WAWebBackendJobs.flow").EncMediaType.Video:
              return "video";
            case o("WAWebBackendJobs.flow").EncMediaType.Ptv:
              return "ptv";
            case o("WAWebBackendJobs.flow").EncMediaType.Audio:
              return "audio";
            case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
              return "ptt";
            case o("WAWebBackendJobs.flow").EncMediaType.VCard:
              return "vcard";
            case o("WAWebBackendJobs.flow").EncMediaType.Document:
              return "document";
            case o("WAWebBackendJobs.flow").EncMediaType.Gif:
              return "gif";
            case o("WAWebBackendJobs.flow").EncMediaType.ContactArray:
              return "contact_array";
            case o("WAWebBackendJobs.flow").EncMediaType.Location:
              return "location";
            case o("WAWebBackendJobs.flow").EncMediaType.LiveLocation:
              return "livelocation";
            case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
              return "sticker";
            case o("WAWebBackendJobs.flow").EncMediaType.List:
              return "list";
            case o("WAWebBackendJobs.flow").EncMediaType.ListResponse:
              return "list_response";
            case o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse:
              return "buttons_response";
            case o("WAWebBackendJobs.flow").EncMediaType.Order:
              return "order";
            case o("WAWebBackendJobs.flow").EncMediaType.Product:
              return "product";
            case o("WAWebBackendJobs.flow").EncMediaType.Url:
              return "url";
            case o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse:
              return "native_flow_response";
            case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
              return "sticker_pack";
            case o("WAWebBackendJobs.flow").EncMediaType.GroupHistory:
              return "group_history";
            default:
              return null;
          }
        },
        n = t();
      if (n) return o("WAWap").CUSTOM_STRING(n);
      throw r("err")("Unsupported type");
    }
    function h(e) {
      return function (t) {
        return t == null ? o("WAWap").DROP_ATTR : e(t);
      };
    }
    var y = h(g);
    function C(e) {
      switch (e) {
        case o("WAWebBackendJobs.flow").DecryptFailType.Show:
          return o("WAWap").DROP_ATTR;
        case o("WAWebBackendJobs.flow").DecryptFailType.Hide:
          return "hide";
      }
    }
    function b(t, n) {
      if (t instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError)
        return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE
          .UNKNOWN_COMPANION_NO_PREKEY;
      if (t instanceof o("WAWebSignalCommonErrors").SignalDecryptionError) {
        var a = r("gkx")("26258") ? 0.001 : 0.01;
        switch (t.message) {
          case "errSignalNoSession":
          case "errLoadSenderKeySession":
            return o("WAWebWamEnumPlaceholderReasonType")
              .PLACEHOLDER_REASON_TYPE.SIGNAL_NO_SESSION;
          case "errSignalInvalidMsg":
            return o("WAWebWamEnumPlaceholderReasonType")
              .PLACEHOLDER_REASON_TYPE.SIGNAL_INVALID_MESSAGE;
          case "errSignalInvalidKey":
          case "errSignalInvalidOneTimeKey":
          case "errSignalInvalidSignedPreKey":
            try {
              if (n.msgInfo.chat.isStatus()) {
                var i = o("WAWebUserPrefsMeUser").isMeAccount(n.msgInfo.author),
                  l = o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    o("WAStanzaUtils").toStanzaId(n.msgInfo.externalId),
                  ),
                  m = n.msgInfo.participantLid == null;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getPlaceholderAddReason] invalidKey peer=",
                      " plat=",
                      " lid=",
                      "",
                    ])),
                  i,
                  l,
                  m,
                );
              }
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "error printing extra details for placeholder: ",
                    "",
                  ])),
                e,
              );
            }
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getPlaceholderAddReason errSignalInvalidKey reason",
                    ])),
                )
                .catching(t)
                .sendLogs("placeholder-add-reason-errSignalInvalidKey", {
                  sampling: a,
                }),
              o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE
                .SIGNAL_INVALID_KEY
            );
          case "errSignalTooManyMessagesInFuture":
          case "errSignalGrpTooManyMessagesInFuture":
            return o("WAWebWamEnumPlaceholderReasonType")
              .PLACEHOLDER_REASON_TYPE.SIGNAL_FUTURE_MESSAGE;
          case "errInvalidMacWithDecryptedPlaintext":
          case "errInvalidMacInvalidCipherKey":
          case "errInvalidMacInvalidCipherKeyNewChain": {
            var p = "MsgPlaceholderBadMac-" + t.message;
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "getPlaceholderAddReason SignalBadMac reason",
                    ])),
                )
                .sendLogs(p, { sampling: a }),
              o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE
                .SIGNAL_BAD_MAC
            );
          }
        }
        var _ = "MsgPlaceholderOther-" + t.message;
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "getPlaceholderAddReason Other reason",
                ])),
            )
            .sendLogs(_, { sampling: a }),
          o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.OTHER
        );
      }
    }
    function v(e) {
      if (e.interactiveResponseMessage) {
        var t;
        return (t = e.interactiveResponseMessage.nativeFlowResponseMessage) ==
          null
          ? void 0
          : t.name;
      }
      return null;
    }
    var S = h(function (e) {
      return o("WAWap").CUSTOM_STRING(e);
    });
    function R(e) {
      switch (e) {
        case o("WAWebAck").EDIT_ATTR.SENDER_REVOKE:
          return o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE;
        case o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE:
          return o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE;
        case o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT:
          return o("WAWebWamEnumEditType").EDIT_TYPE.EDITED;
        default:
          return o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
      }
    }
    function L(e, t) {
      var n,
        r =
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(e)) != null
            ? n
            : e;
      return o("WAWebSendMsgCommonApi").isRevokeMsg(r)
        ? t.subtype === "admin_revoke"
          ? o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE
          : o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE
        : o("WAWebSendMsgCommonApi").isEditMsg(r)
          ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED
          : o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
    }
    function E(e) {
      return e
        ? o("WAJobOrchestratorTypes").JOB_PRIORITY.OFFLINE
        : o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW;
    }
    ((l.CIPHERTEXT_VERSION = m),
      (l.getMetricE2eCiphertextType = p),
      (l.getMetricMediaType = _),
      (l.mediaTypeFromProtobuf = f),
      (l.encodeMaybeMediaType = y),
      (l.encodeMaybeDecryptFail = C),
      (l.getPlaceholderAddReason = b),
      (l.nativeFlowNameTypeFromProtobuf = v),
      (l.encodeMaybeNativeFlowName = S),
      (l.getMetricEditType = R),
      (l.getMetricEditTypeFromMsg = L),
      (l.getNonCriticalNotificationPriority = E));
  },
  98,
);
