__d(
  "WAWebStatusPublishRequestArgs",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgCommon",
    "WAWebSendMsgCommonApi",
    "WAWebUserPrefsStatusType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      e: {
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Msg) return "msg";
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg)
          return "pkmsg";
        throw e === o("WAWebBackendJobs.flow").CiphertextType.Skmsg ||
          e === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
          ? r("err")(
              "toStatusEncType: unsupported sender key distribution type " +
                String(e),
            )
          : Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
      }
    }
    function d(e) {
      return e === 2
        ? { isEncVersion2: !0 }
        : e === 3
          ? { isEncVersion3: !0 }
          : { encVersionFutureproof: { encV: e } };
    }
    var m = { isStatusContentTypeText: !0 };
    function p(t) {
      e: {
        if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media)
          return { isStatusContentTypeMedia: !0 };
        if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction)
          return { isStatusContentTypeReaction: !0 };
        if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text)
          return { isStatusContentTypeText: !0 };
        if (
          t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event ||
          t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify ||
          t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.pay ||
          t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
        ) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "toStatusContentTypeArgs: unmodelled status content type sent as text",
                  ])),
              )
              .sendLogs("status-publish-unmodelled-content-type"),
            m
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function _(e) {
      if (e == null) return null;
      var t = f(e);
      return t == null
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "toStatusEncMediaTypeArgs: media type not modelled by status_publish",
                ])),
            )
            .sendLogs("status-publish-unmodelled-media-type"),
          null)
        : { encMediatype: t };
    }
    function f(e) {
      return e === o("WAWebBackendJobs.flow").EncMediaType.Image
        ? "image"
        : e === o("WAWebBackendJobs.flow").EncMediaType.Video
          ? "video"
          : e === o("WAWebBackendJobs.flow").EncMediaType.Ptv
            ? "ptv"
            : e === o("WAWebBackendJobs.flow").EncMediaType.Audio
              ? "audio"
              : e === o("WAWebBackendJobs.flow").EncMediaType.Ptt
                ? "ptt"
                : e === o("WAWebBackendJobs.flow").EncMediaType.Location
                  ? "location"
                  : e === o("WAWebBackendJobs.flow").EncMediaType.VCard
                    ? "vcard"
                    : e === o("WAWebBackendJobs.flow").EncMediaType.Document
                      ? "document"
                      : e === o("WAWebBackendJobs.flow").EncMediaType.Url
                        ? "url"
                        : e === o("WAWebBackendJobs.flow").EncMediaType.Gif
                          ? "gif"
                          : e ===
                              o("WAWebBackendJobs.flow").EncMediaType
                                .ContactArray
                            ? "contact_array"
                            : e ===
                                o("WAWebBackendJobs.flow").EncMediaType.Sticker
                              ? "sticker"
                              : e ===
                                  o("WAWebBackendJobs.flow").EncMediaType
                                    .StickerPack
                                ? "sticker_pack"
                                : e ===
                                    o("WAWebBackendJobs.flow").EncMediaType
                                      .ListResponse
                                  ? "list_response"
                                  : e ===
                                      o("WAWebBackendJobs.flow").EncMediaType
                                        .Order
                                    ? "order"
                                    : e ===
                                        o("WAWebBackendJobs.flow").EncMediaType
                                          .Product
                                      ? "product"
                                      : e ===
                                          o("WAWebBackendJobs.flow")
                                            .EncMediaType.NativeFlowResponse
                                        ? "native_flow_response"
                                        : e ===
                                            o("WAWebBackendJobs.flow")
                                              .EncMediaType.GroupHistory
                                          ? "group_history"
                                          : e ===
                                              o("WAWebBackendJobs.flow")
                                                .EncMediaType.ButtonResponse
                                            ? "buttons_response"
                                            : e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.Button ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.Call ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.Future ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.Hsm ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.List ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType
                                                    .LiveLocation ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.MdAppState ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType
                                                    .MdHistorySync ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType
                                                    .ProductImage ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.ProfilePic ||
                                                e ===
                                                  o("WAWebBackendJobs.flow")
                                                    .EncMediaType.Template
                                              ? null
                                              : (function () {
                                                  throw Error(
                                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                      e,
                                                  );
                                                })();
    }
    function g(e, t) {
      var n = o("WAWebSendMsgCommonApi").getEditAttrValue(e, t);
      return n == null
        ? null
        : n === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE
          ? { isStatusRevoke: !0 }
          : n === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT
            ? { isStatusEdit: !0 }
            : (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "toStatusEditOrRevokeArgs: edit value not modelled by status_publish",
                    ])),
                )
                .sendLogs("status-publish-unmodelled-edit-attr"),
              null);
    }
    function h(e) {
      return e ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
        ? "allowlist"
        : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
          ? "denylist"
          : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
            ? "contacts"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function y(e) {
      return { metaStatusSetting: h(e) };
    }
    ((l.toStatusEncType = c),
      (l.toEncVersionArgs = d),
      (l.toStatusContentTypeArgs = p),
      (l.toStatusEncMediaTypeArgs = _),
      (l.toStatusEditOrRevokeArgs = g),
      (l.toStatusSettingMetaAttribute = h),
      (l.toStatusSettingArgs = y));
  },
  98,
);
