__d(
  "WAWebBlockUserJob",
  [
    "WALogger",
    "WASmaxBlocklistsUpdateBlockListRPC",
    "WASmaxPsaChatBlockSetRPC",
    "WAWebApiContact",
    "WAWebLidAwareContactsDB",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = { blockingAction: t },
            r = yield o("WASmaxPsaChatBlockSetRPC").sendChatBlockSetRPC(n);
          e: {
            var a = r;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "ChatBlockSetResponseServerError" &&
              ((typeof a.value == "object" && a.value !== null) ||
                typeof a.value == "function") &&
              ((typeof a.value.errorChatBlockError == "object" &&
                a.value.errorChatBlockError !== null) ||
                typeof a.value.errorChatBlockError == "function") &&
              ((typeof a.value.errorChatBlockError.value == "object" &&
                a.value.errorChatBlockError.value !== null) ||
                typeof a.value.errorChatBlockError.value == "function") &&
              "code" in a.value.errorChatBlockError.value &&
              "text" in a.value.errorChatBlockError.value
            ) {
              var i = a.value.errorChatBlockError.value.code,
                l = a.value.errorChatBlockError.value.text;
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "blockUnblockPSAUser: server response with ",
                      ", ",
                      "",
                    ])),
                  i,
                  l,
                ),
                { errorCode: Number(i), errorText: l }
              );
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "ChatBlockSetResponseSuccess"
            )
              break e;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return e == null
        ? null
        : {
            bizOptOutReason: e.reason,
            bizOptOutReasonDescription: e.reasonDescription,
            bizOptOutEntryPoint: e.entryPoint,
            bizOptOutFirstMessage: e.firstMessage,
            bizOptOutBusinessDiscoveryEntryPoint: e.businessDiscoveryEntryPoint,
            bizOptOutBusinessDiscoveryTimestamp: e.businessDiscoveryTimestamp,
            bizOptOutBusinessDiscoveryId: e.businessDiscoveryId,
          };
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebUserPrefsMultiDevice").getBlocklistHash(),
            n = e.lid ? yield h(e.lid, e.action) : C(e.wid, e.action),
            r = _(e.bizOptOutArgs),
            a = {
              bizOptOutArgs: r != null ? r : null,
              itemDhash: t != null ? t : null,
              updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs: n,
            },
            i = yield o(
              "WASmaxBlocklistsUpdateBlockListRPC",
            ).sendUpdateBlockListRPC(a);
          switch (i.name) {
            case "UpdateBlockListResponseInvalidRequest": {
              var l = i.value.errorUpdateBlocklistErrors.value,
                d = l.code,
                m = l.text;
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "blockUnblockUser: server response with ",
                      ", ",
                      "",
                    ])),
                  d,
                  m,
                ),
                { errorCode: Number(d), errorText: m }
              );
            }
            case "UpdateBlockListResponseServerError": {
              var p = i.value.errorServerErrors.value,
                f = p.code,
                g = p.text;
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "blockUnblockUser: server response with ",
                      ", ",
                      "",
                    ])),
                  f,
                  g,
                ),
                { errorCode: Number(f), errorText: g }
              );
            }
            default:
              (i.name,
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "block/unblock ",
                      ": success",
                    ])),
                  e.bizOptOutArgs != null ? "biz" : "user",
                ));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebWidToJid").userLidtoLidUserJid(e);
          if (t === "block") {
            var r = yield b(e);
            return {
              updateBlockListBlockItem: {
                updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs:
                  {
                    updateBlockListMigratedBlockItem: {
                      itemJid: n,
                      blocklistIdsArgs: S(r),
                    },
                  },
              },
            };
          }
          return { updateBlockListUnblockItem: { itemJid: n } };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n = o("WAWebWidToJid").widToUserJid(e);
      return t === "block"
        ? {
            updateBlockListBlockItem: {
              updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs:
                { updateBlockListNonMigratedBlockItem: { itemJid: n } },
            },
          }
        : { updateBlockListUnblockItem: { itemJid: n } };
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e.toString());
          if (!t)
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[blocklist] getBlocklistIdentifier: no lid contact ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("no-lid-contact"),
              null
            );
          if (t.phoneNumber != null && t.username != null)
            return t.name != null
              ? { pn: o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber) }
              : { username: t.username };
          if (t.username != null) return { username: t.username };
          var n = o("WAWebApiContact").getPhoneNumber(e);
          return n != null
            ? { pn: n }
            : t.displayNameLID != null
              ? { displayName: t.displayNameLID }
              : null;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e == null
        ? { isUnknownIdentifier: !0 }
        : e.pn != null
          ? { pnJid: { anyPnJid: o("WAWebWidToJid").widToUserJid(e.pn) } }
          : e.username != null
            ? { username: { anyUsername: e.username } }
            : (e.displayName,
              { displayName: { anyDisplayName: e.displayName } });
    }
    ((l.blockUnblockPSAUser = m),
      (l.blockUnblockUser = f),
      (l.getBlocklistIdentifier = b));
  },
  98,
);
