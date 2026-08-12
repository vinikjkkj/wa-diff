__d(
  "WAWebBotReplaceMentionWidsWithPushnames",
  ["WAWebApiContact", "WAWebBotGroupGatingUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      function (e) {
        var t,
          n = e.extendedTextMessage;
        return (n == null ? void 0 : n.text) == null
          ? null
          : {
              text: n.text,
              quotedMessage:
                (t = n.contextInfo) == null ? void 0 : t.quotedMessage,
              apply: function (r, o) {
                var t = babelHelpers.extends({}, n, { text: r });
                (o != null &&
                  n.contextInfo != null &&
                  (t = babelHelpers.extends({}, t, {
                    contextInfo: babelHelpers.extends({}, n.contextInfo, {
                      quotedMessage: o,
                    }),
                  })),
                  (e.extendedTextMessage = t));
              },
            };
      },
      function (e) {
        var t,
          n = e.imageMessage;
        return (n == null ? void 0 : n.caption) == null
          ? null
          : {
              text: n.caption,
              quotedMessage:
                (t = n.contextInfo) == null ? void 0 : t.quotedMessage,
              apply: function (r, o) {
                var t = babelHelpers.extends({}, n, { caption: r });
                (o != null &&
                  n.contextInfo != null &&
                  (t = babelHelpers.extends({}, t, {
                    contextInfo: babelHelpers.extends({}, n.contextInfo, {
                      quotedMessage: o,
                    }),
                  })),
                  (e.imageMessage = t));
              },
            };
      },
      function (e) {
        var t,
          n = e.videoMessage;
        return (n == null ? void 0 : n.caption) == null
          ? null
          : {
              text: n.caption,
              quotedMessage:
                (t = n.contextInfo) == null ? void 0 : t.quotedMessage,
              apply: function (r, o) {
                var t = babelHelpers.extends({}, n, { caption: r });
                (o != null &&
                  n.contextInfo != null &&
                  (t = babelHelpers.extends({}, t, {
                    contextInfo: babelHelpers.extends({}, n.contextInfo, {
                      quotedMessage: o,
                    }),
                  })),
                  (e.videoMessage = t));
              },
            };
      },
      function (e) {
        var t,
          n = e.documentMessage;
        return (n == null ? void 0 : n.caption) == null
          ? null
          : {
              text: n.caption,
              quotedMessage:
                (t = n.contextInfo) == null ? void 0 : t.quotedMessage,
              apply: function (r, o) {
                var t = babelHelpers.extends({}, n, { caption: r });
                (o != null &&
                  n.contextInfo != null &&
                  (t = babelHelpers.extends({}, t, {
                    contextInfo: babelHelpers.extends({}, n.contextInfo, {
                      quotedMessage: o,
                    }),
                  })),
                  (e.documentMessage = t));
              },
            };
      },
    ];
    function s(e, t) {
      if (e === "" || t.size === 0) return e;
      var n = e,
        r = [].concat(Array.from(t.keys())).sort(function (e, t) {
          return t.length - e.length;
        });
      for (var o of r) {
        var a,
          i = (a = t.get(o)) != null ? a : "";
        n = n.split(o).join(i);
      }
      return n;
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Map();
          if (e != null && e.length > 0)
            for (
              var r = yield o("WAWebApiContact").bulkGetContactRecord(
                  [].concat(e),
                ),
                a = 0;
              a < e.length;
              a++
            ) {
              var i = e[a],
                l = r[a],
                s =
                  (l == null ? void 0 : l.pushname) ||
                  (l == null ? void 0 : l.verifiedName);
              i != null &&
                s != null &&
                s !== "" &&
                n.set("@" + i.user, "@" + s);
            }
          for (var u of t != null ? t : []) {
            var c = u.groupJid,
              d = u.groupSubject;
            d != null && d !== "" && n.set("@" + c.toString(), "@" + d);
          }
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
      for (var n of e) {
        var r = n(t);
        if (r != null) return r;
      }
      return null;
    }
    function m(e, t) {
      var n = d(e);
      if (n != null) {
        var r = s(n.text, t);
        r !== n.text && n.apply(r, null);
      }
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              t == null ||
              t.length === 0 ||
              !o(
                "WAWebBotGroupGatingUtils",
              ).isGroupBotSendMentionedPushnameEnabled()
            )
          ) {
            var n = yield u(t);
            if (n.size !== 0) {
              var r = d(e);
              if (r != null) {
                var a = s(r.text, n),
                  i = null;
                (r.quotedMessage != null &&
                  ((i = babelHelpers.extends({}, r.quotedMessage)), m(i, n)),
                  (a !== r.text || i != null) && r.apply(a, i));
              }
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.replaceMentionsInText = s),
      (l.buildMentionMap = u),
      (l.replaceMentionsInMsgText = m),
      (l.replaceMentionWidsWithPushnames = p));
  },
  98,
);
