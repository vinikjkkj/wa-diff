__d(
  "WAWebBotReplaceMentionWidsWithPushnames",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "escapeRegex",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "Meta AI",
      d = [
        function (e) {
          var t,
            n,
            r = e.extendedTextMessage;
          return (r == null ? void 0 : r.text) == null
            ? null
            : {
                text: r.text,
                quotedMessage:
                  (t = r.contextInfo) == null ? void 0 : t.quotedMessage,
                mentionedJids:
                  (n = r.contextInfo) == null ? void 0 : n.mentionedJid,
                apply: function (n, o) {
                  var t = babelHelpers.extends({}, r, { text: n });
                  (o != null &&
                    r.contextInfo != null &&
                    (t = babelHelpers.extends({}, t, {
                      contextInfo: babelHelpers.extends({}, r.contextInfo, {
                        quotedMessage: o,
                      }),
                    })),
                    (e.extendedTextMessage = t));
                },
              };
        },
        function (e) {
          var t,
            n,
            r = e.imageMessage;
          return (r == null ? void 0 : r.caption) == null
            ? null
            : {
                text: r.caption,
                quotedMessage:
                  (t = r.contextInfo) == null ? void 0 : t.quotedMessage,
                mentionedJids:
                  (n = r.contextInfo) == null ? void 0 : n.mentionedJid,
                apply: function (n, o) {
                  var t = babelHelpers.extends({}, r, { caption: n });
                  (o != null &&
                    r.contextInfo != null &&
                    (t = babelHelpers.extends({}, t, {
                      contextInfo: babelHelpers.extends({}, r.contextInfo, {
                        quotedMessage: o,
                      }),
                    })),
                    (e.imageMessage = t));
                },
              };
        },
        function (e) {
          var t,
            n,
            r = e.videoMessage;
          return (r == null ? void 0 : r.caption) == null
            ? null
            : {
                text: r.caption,
                quotedMessage:
                  (t = r.contextInfo) == null ? void 0 : t.quotedMessage,
                mentionedJids:
                  (n = r.contextInfo) == null ? void 0 : n.mentionedJid,
                apply: function (n, o) {
                  var t = babelHelpers.extends({}, r, { caption: n });
                  (o != null &&
                    r.contextInfo != null &&
                    (t = babelHelpers.extends({}, t, {
                      contextInfo: babelHelpers.extends({}, r.contextInfo, {
                        quotedMessage: o,
                      }),
                    })),
                    (e.videoMessage = t));
                },
              };
        },
        function (e) {
          var t,
            n,
            r = e.documentMessage;
          return (r == null ? void 0 : r.caption) == null
            ? null
            : {
                text: r.caption,
                quotedMessage:
                  (t = r.contextInfo) == null ? void 0 : t.quotedMessage,
                mentionedJids:
                  (n = r.contextInfo) == null ? void 0 : n.mentionedJid,
                apply: function (n, o) {
                  var t = babelHelpers.extends({}, r, { caption: n });
                  (o != null &&
                    r.contextInfo != null &&
                    (t = babelHelpers.extends({}, t, {
                      contextInfo: babelHelpers.extends({}, r.contextInfo, {
                        quotedMessage: o,
                      }),
                    })),
                    (e.documentMessage = t));
                },
              };
        },
      ];
    function m(e, t) {
      if (e === "" || t.size === 0) return e;
      var n = [].concat(Array.from(t.keys())).sort(function (e, t) {
          return t.length - e.length;
        }),
        o = new RegExp(
          "(" + n.map(r("escapeRegex")).join("|") + ")(?!\\d)",
          "g",
        );
      return e.replace(o, function (e) {
        var n;
        return (n = t.get(e)) != null ? n : e;
      });
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          r === void 0 && (r = "pushnameOrVerifiedName");
          var a = new Map(),
            i = e != null ? e : [],
            l = i.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid),
            s = i.filter(function (e) {
              return (
                !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
                !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)
              );
            });
          i.filter(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid).forEach(
            function (e) {
              a.set("@" + e.user, "@" + c);
            },
          );
          var d = yield (u || (u = n("Promise"))).all([
              s.length > 0 ? o("WAWebApiContact").bulkGetContactRecord(s) : [],
              l.length > 0 ? g(l) : [],
            ]),
            m = d[0],
            p = d[1];
          (s.forEach(function (e, t) {
            var n = f(e, m[t], r);
            n != null && n !== "" && a.set("@" + e.user, "@" + n);
          }),
            l.forEach(function (e, t) {
              var n = p[t];
              n != null && n !== "" && a.set("@" + e.user, "@" + n);
            }));
          for (var _ of t != null ? t : []) {
            var h = _.groupJid,
              y = _.groupSubject;
            y != null && y !== "" && a.set("@" + h.toString(), "@" + y);
          }
          return a;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return n === "pushname" && !e.isBot()
        ? t == null
          ? void 0
          : t.pushname
        : (t == null ? void 0 : t.pushname) ||
            (t == null ? void 0 : t.verifiedName);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .bulkGet(
                e.map(function (e) {
                  return e.toString();
                }),
              );
            return t.map(function (e) {
              return e == null ? void 0 : e.name;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[botReplaceMentionWidsWithPushnames] bot profile read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-mention-agent-profile-read-failed"),
              []
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    var y = [
      "viewOnceMessage",
      "viewOnceMessageV2",
      "viewOnceMessageV2Extension",
      "documentWithCaptionMessage",
      "ephemeralMessage",
      "groupMentionedMessage",
      "spoilerMessage",
    ];
    function C(e) {
      for (var t of d) {
        var n = t(e);
        if (n != null) return n;
      }
      return b(e);
    }
    function b(e) {
      var t = function (n) {
          var t = e[n],
            r = t == null ? void 0 : t.message;
          if (t != null && r != null) {
            var o = babelHelpers.extends({}, r),
              a = C(o);
            if (a != null)
              return {
                v: babelHelpers.extends({}, a, {
                  apply: function (i, l) {
                    (a.apply(i, l),
                      (e[n] = babelHelpers.extends({}, t, { message: o })));
                  },
                }),
              };
          }
        },
        n;
      for (var r of y) if (((n = t(r)), n)) return n.v;
      return null;
    }
    function v(e, t) {
      var n = C(e);
      if (n != null) {
        var r = m(n.text, t);
        r !== n.text && n.apply(r, null);
      }
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          if (t != null) {
            var a = C(e);
            if (a != null) {
              var i =
                a.quotedMessage != null
                  ? (n = C(babelHelpers.extends({}, a.quotedMessage))) == null
                    ? void 0
                    : n.mentionedJids
                  : null;
              if (
                !(
                  (t.length === 0 &&
                    ((r = i == null ? void 0 : i.length) != null ? r : 0) ===
                      0) ||
                  !o(
                    "WAWebBotGroupGatingUtils",
                  ).isGroupBotSendMentionedPushnameEnabled()
                )
              ) {
                var l = E(t, L(i));
                if (l.length !== 0) {
                  var s = yield p(l, null, "pushname");
                  if (s.size !== 0) {
                    var u = new Set(
                        t.map(function (e) {
                          return "@" + e.user;
                        }),
                      ),
                      c = new Map(
                        Array.from(s).filter(function (e) {
                          var t = e[0];
                          return u.has(t);
                        }),
                      ),
                      d = m(a.text, c),
                      _ = null;
                    (a.quotedMessage != null &&
                      ((_ = babelHelpers.extends({}, a.quotedMessage)),
                      v(_, s)),
                      (d !== a.text || _ != null) && a.apply(d, _));
                  }
                }
              }
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
      var n = [],
        a = [];
      for (var i of t != null ? t : [])
        try {
          var l = o("WAWebWidFactory").createWid(i);
          (l.isUser() || l.isBot()) && n.push(l);
        } catch (e) {
          a.push(e);
        }
      return (
        a.length > 0 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[botReplaceMentionWidsWithPushnames] skipped ",
                  " invalid quoted mention jids",
                ])),
              a.length,
            )
            .catching(r("getErrorSafe")(a[0]))
            .sendLogs("bot-mention-quoted-jid-invalid"),
        n
      );
    }
    function E(e, t) {
      var n = new Map();
      return (
        [].concat(e, t).forEach(function (e) {
          n.set(e.toString(), e);
        }),
        Array.from(n.values())
      );
    }
    ((l.replaceMentionsInText = m),
      (l.buildMentionMap = p),
      (l.replaceMentionsInMsgText = v),
      (l.replaceMentionWidsWithPushnames = S));
  },
  98,
);
