__d(
  "WAWebStatusPublishRequestArgs",
  [
    "WALogger",
    "WAStanzaUtils",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgCommon",
    "WAWebLidMigrationUtils",
    "WAWebSendMsgCommonApi",
    "WAWebUserPrefsStatusType",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Uint8Array(0);
    function p(e) {
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
    function _(e) {
      return e === 2
        ? { isEncVersion2: !0 }
        : e === 3
          ? { isEncVersion3: !0 }
          : { encVersionFutureproof: { encV: e } };
    }
    var f = { isStatusContentTypeText: !0 };
    function g(t) {
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
            f
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    var h = new Map([
      [
        o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction,
        { metaContentType: "add_on" },
      ],
    ]);
    function y(e) {
      if (e == null) return null;
      var t = C(e);
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
    function C(e) {
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
    function b(e, t) {
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
    function v(e) {
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
    function S(e) {
      return { metaStatusSetting: v(e) };
    }
    function R(e) {
      var t = e.ciphertextVersion,
        n = e.encMediaType,
        r = e.hideDecryptFail,
        a = e.participants,
        i = e.senderKeyDistributions,
        l = _(t),
        s = y(n),
        u = i.map(function (e) {
          var t = e.ciphertext,
            n = e.isPqSession,
            a = e.participant,
            i = e.type;
          return {
            statusToDeviceOrUserMixinGroupArgs: {
              statusToDevice: {
                toJid: o("WAWebWidToJid").widToDeviceJid(a),
                encTypeIndividualMixinArgs: {
                  encType: p(i),
                  encElementValue: new Uint8Array(t),
                  encMediaTypeMixinArgs: s,
                  encStateOrSessionTypeMixinGroupArgs: n
                    ? { isEncSessionType: !0 }
                    : null,
                },
                hasStatusEncHideDecryptFail: r ? !0 : null,
                encVersionArgs: l,
              },
            },
          };
        }),
        m = 0,
        f = 0;
      for (var g of a) {
        var h = o("WAWebLidMigrationUtils").toUserLid(g);
        if (h == null) {
          f++;
          continue;
        }
        (o("WAWebSendMsgCommonApi").isPrimaryDevice(g) || m++,
          u.push({
            statusToDeviceOrUserMixinGroupArgs: {
              statusToUser: {
                toJid: o("WAWebWidToJid").userLidtoLidUserJid(h),
              },
            },
          }));
      }
      return (
        m > 0 &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "toStatusFanoutArgs: a bare <to> cannot carry a device number, so ",
                  " of ",
                  " participants lost theirs",
                ])),
              m,
              a.length,
            )
            .sendLogs("status-publish-companion-participant"),
        f > 0 &&
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "toStatusFanoutArgs: skipped ",
                  " of ",
                  " participants without a LID mapping",
                ])),
              f,
              a.length,
            )
            .sendLogs("status-publish-participant-without-lid"),
        u.length > 0 ? { toArgs: u } : null
      );
    }
    function L(e) {
      return e != null
        ? {
            clientReportingTokenMixinArgs: {
              reportingTokenElementMixinArgs: e,
            },
          }
        : null;
    }
    function E(e) {
      var t = e.ciphertextVersion,
        n = e.clientReportingToken,
        r = e.editOrRevoke,
        o = e.encMediaType,
        a = e.participants,
        i = e.senderKeyCiphertext,
        l = e.senderKeyDistributions,
        s = e.statusSetting;
      return babelHelpers.extends({}, I(e), {
        statusEncSettingMixinArgs: s != null ? S(s) : null,
        statusBroadcastPublishTypeMixinsArgs: {
          statusBroadcastRegular: {
            encArgs: [
              {
                encElementValue: i,
                encMediaTypeMixinArgs: y(o),
                encVersionArgs: _(t),
              },
            ],
            statusEncFanoutMixinArgs: R({
              ciphertextVersion: t,
              encMediaType: null,
              hideDecryptFail: !1,
              participants: a,
              senderKeyDistributions: l,
            }),
            statusReportingMixinArgs: L(n),
            statusEditOrRevokeMixinGroupArgs: r,
          },
        },
      });
    }
    function k(e) {
      var t = e.ciphertextVersion,
        n = e.clientReportingToken,
        o = e.deviceEncs,
        a = e.editOrRevoke,
        i = e.encMediaType,
        l = e.hideDecryptFail,
        s = R({
          ciphertextVersion: t,
          encMediaType: i,
          hideDecryptFail: l,
          participants: [],
          senderKeyDistributions: o,
        });
      if (s == null)
        throw r("err")(
          "toStatusDirectPublishArgs: directed status has no recipients",
        );
      return babelHelpers.extends({}, I(e), {
        statusBroadcastPublishTypeMixinsArgs: {
          statusBroadcastDirected: {
            statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs: {
              statusEncFanoutSenderKeyEmpty: babelHelpers.extends({}, s, {
                encTypeSenderKeyEmptyMixinArgs: { encElementValue: m },
                encVersionArgs: _(t),
              }),
            },
            statusReportingMixinArgs: L(n),
            statusEditOrRevokeMixinGroupArgs: a,
          },
        },
      });
    }
    function I(e) {
      var t,
        n = e.deviceIdentity,
        r = e.msgType,
        a = e.statusId,
        i = e.useStatusSessionScope;
      return {
        statusId: o("WAStanzaUtils").toStanzaId(a),
        deviceIdentityMixinArgs:
          n != null ? { deviceIdentityElementValue: n } : null,
        hasStatusEncSessionScope: i ? !0 : null,
        statusEncContentTypeMixinArgs: (t = h.get(r)) != null ? t : null,
        statusEncContentTypeMixinsArgs: g(r),
      };
    }
    ((l.toStatusEncType = p),
      (l.toEncVersionArgs = _),
      (l.toStatusContentTypeArgs = g),
      (l.toStatusEncMediaTypeArgs = y),
      (l.toStatusEditOrRevokeArgs = b),
      (l.toStatusSettingMetaAttribute = v),
      (l.toStatusSettingArgs = S),
      (l.toStatusFanoutArgs = R),
      (l.toStatusBroadcastPublishArgs = E),
      (l.toStatusDirectPublishArgs = k));
  },
  98,
);
