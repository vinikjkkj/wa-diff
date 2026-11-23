__d(
  "WAWebDBProcessReplyMsgs",
  [
    "WADeepEquals",
    "WALogger",
    "WAWebBatchedStatusIdUtils",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMessageEditUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebWid",
    "filterObject",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      if (e.length) {
        var t = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (t) {
            var n = t[0],
              a = p(),
              i = e.map(function (e) {
                return { msg: e, keys: m(e, a) };
              }),
              l = new Set(
                i.flatMap(function (e) {
                  var t = e.keys;
                  return t;
                }),
              ),
              s = (
                await o("WAWebDBMsgUtils").getMsgsByMsgKey(
                  Array.from(l.values()),
                )
              ).filter(function (e) {
                return a
                  ? !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) &&
                      e.type !== o("WAWebMsgType").MSG_TYPE.QUARANTINED &&
                      e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                      !o("WAWebCommonMsgUtils").isNotificationType(
                        e.type,
                        e.subtype,
                      )
                  : o("WAWebMessageEditUtils").getMsgEditType(e.type) != null;
              }),
              u = new Map(
                s.map(function (e) {
                  return [e.id.toString(), e];
                }),
              ),
              c = [];
            if (
              (i.forEach(function (e) {
                var t = e.keys,
                  n = e.msg,
                  o = t.find(function (e) {
                    return u.has(e);
                  });
                o != null &&
                  c.push({ msg: n, quotedMsg: r("nullthrows")(u.get(o)) });
              }),
              !!c.length)
            ) {
              var d = [];
              if (
                (c.forEach(function (e) {
                  var t = e.msg,
                    n = e.quotedMsg;
                  t.quotedMsg == null
                    ? d.push(babelHelpers.extends({}, t, { quotedMsg: n }))
                    : o("WAWebMessageEditUtils").getMsgEditType(n.type) !=
                        null &&
                      h(r("nullthrows")(t.quotedMsg), n) &&
                      d.push(babelHelpers.extends({}, t, { quotedMsg: n }));
                }),
                !!d.length)
              )
                return (
                  await n.bulkCreateOrMerge(
                    d.map(function (e) {
                      return o("WAWebDBMessageSerialization").dbRowFromMessage(
                        e,
                      );
                    }),
                  ),
                  d
                );
            }
          });
        t != null &&
          t.length &&
          t.forEach(function (t) {
            var n = r("nullthrows")(
              e.find(function (e) {
                return e.id.equals(t.id);
              }),
            );
            n.quotedMsg = t.quotedMsg;
          });
      }
    }
    async function c(t, n) {
      var a = t.filter(d);
      if (!(a.length === 0 || !p()))
        try {
          await u(a);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reply-messages] processReplyMsgs failed, source: ",
                  "",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("process-reply-msgs-failed");
        }
    }
    function d(e) {
      return e.quotedMsg == null && !r("isStringNullOrEmpty")(e.quotedStanzaID);
    }
    function m(e, t) {
      var n = _(function () {
        return f(e);
      });
      if (n == null || n === "missing-stanza-id") return [];
      if (!t) return [n.toString()];
      var r = _(function () {
        return o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
      });
      return r == null ? [n.toString()] : [n.toString(), r.toString()];
    }
    function p() {
      return r("justknobx")._("6899");
    }
    function _(e) {
      try {
        return e();
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[reply-messages] failed to create quoted msg key",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("reply-msgs-quoted-key-fail"),
          null
        );
      }
    }
    function f(e) {
      var t, n;
      if (r("isStringNullOrEmpty")(e.quotedStanzaID))
        return "missing-stanza-id";
      var a = (t = e.quotedParticipant) != null ? t : void 0,
        i = (n = e.quotedRemoteJid) != null ? n : e.id.remote,
        l = e.quotedStanzaID,
        s =
          l != null && r("WAWebWid").isStatus(i)
            ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(l)
            : l;
      return new (r("WAWebMsgKey"))({
        id: s,
        fromMe: o("WAWebUserUtils").isMeAccount(a),
        remote: i,
        participant:
          o("WAWebMsgGetters").getIsGroupMsg(e) ||
          r("WAWebWid").isStatus(i) ||
          (a != null && a.isBot())
            ? a
            : void 0,
      });
    }
    var g = {
      inviteGrpType: o("WAWebGroupType").GroupType.DEFAULT,
      thumbnail: "",
      body: "",
      caption: "",
      interactiveAnnotations: [],
      scanLengths: [],
      staticUrl: "",
      pageCount: 0,
    };
    function h(e, t) {
      var n = r("filterObject")(e, function (e, t) {
          return e != null && t !== "kind";
        }),
        a = r("filterObject")(t, function (e, t) {
          return Object.prototype.hasOwnProperty.call(n, t) && t !== "kind";
        }),
        i = y(n),
        l = y(a);
      return !o("WADeepEquals").deepEqual(i, l);
    }
    function y(e) {
      var t = babelHelpers.extends({}, g);
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        o !== void 0 && (t[r] = o);
      }
      return t;
    }
    ((l.processReplyMsgs = u),
      (l.hydrateReplyMsgsSafely = c),
      (l.createQuotedMsgKey = f));
  },
  98,
);
