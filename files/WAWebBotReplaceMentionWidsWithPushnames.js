__d(
  "WAWebBotReplaceMentionWidsWithPushnames",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "escapeRegex",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "Meta AI",
      c = [
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
    function d(e, t) {
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
    async function m(e, t, n) {
      n === void 0 && (n = "pushnameOrVerifiedName");
      var r = new Map(),
        a = e != null ? e : [],
        i = a.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid),
        l = a.filter(function (e) {
          return (
            !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
            !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)
          );
        });
      a.filter(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid).forEach(
        function (e) {
          r.set("@" + e.user, "@" + u);
        },
      );
      var s = await Promise.all([
          l.length > 0 ? o("WAWebApiContact").bulkGetContactRecord(l) : [],
          i.length > 0 ? _(i) : [],
        ]),
        c = s[0],
        d = s[1];
      (l.forEach(function (e, t) {
        var o = p(e, c[t], n);
        o != null && o !== "" && r.set("@" + e.user, "@" + o);
      }),
        i.forEach(function (e, t) {
          var n = d[t];
          n != null && n !== "" && r.set("@" + e.user, "@" + n);
        }));
      for (var m of t != null ? t : []) {
        var f = m.groupJid,
          g = m.groupSubject;
        g != null && g !== "" && r.set("@" + f.toString(), "@" + g);
      }
      return r;
    }
    function p(e, t, n) {
      return n === "pushname" && !e.isBot()
        ? t == null
          ? void 0
          : t.pushname
        : (t == null ? void 0 : t.pushname) ||
            (t == null ? void 0 : t.verifiedName);
    }
    async function _(t) {
      try {
        var n = await o("WAWebSchemaBotProfile")
          .getBotProfileTable()
          .bulkGet(
            t.map(function (e) {
              return e.toString();
            }),
          );
        return n.map(function (e) {
          return e == null ? void 0 : e.name;
        });
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[botReplaceMentionWidsWithPushnames] bot profile read failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bot-mention-agent-profile-read-failed"),
          []
        );
      }
    }
    var f = [
      "viewOnceMessage",
      "viewOnceMessageV2",
      "viewOnceMessageV2Extension",
      "documentWithCaptionMessage",
      "ephemeralMessage",
      "groupMentionedMessage",
      "spoilerMessage",
    ];
    function g(e) {
      for (var t of c) {
        var n = t(e);
        if (n != null) return n;
      }
      return h(e);
    }
    function h(e) {
      var t = function (n) {
          var t = e[n],
            r = t == null ? void 0 : t.message;
          if (t != null && r != null) {
            var o = babelHelpers.extends({}, r),
              a = g(o);
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
      for (var r of f) if (((n = t(r)), n)) return n.v;
      return null;
    }
    function y(e, t) {
      var n = g(e);
      if (n != null) {
        var r = d(n.text, t);
        r !== n.text && n.apply(r, null);
      }
    }
    async function C(e, t) {
      var n, r;
      if (t != null) {
        var a = g(e);
        if (a != null) {
          var i =
            a.quotedMessage != null
              ? (n = g(babelHelpers.extends({}, a.quotedMessage))) == null
                ? void 0
                : n.mentionedJids
              : null;
          if (
            !(
              (t.length === 0 &&
                ((r = i == null ? void 0 : i.length) != null ? r : 0) === 0) ||
              !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
            )
          ) {
            var l = v(t, b(i));
            if (l.length !== 0) {
              var s = await m(l, null, "pushname");
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
                  p = d(a.text, c),
                  _ = null;
                (a.quotedMessage != null &&
                  ((_ = babelHelpers.extends({}, a.quotedMessage)), y(_, s)),
                  (p !== a.text || _ != null) && a.apply(p, _));
              }
            }
          }
        }
      }
    }
    function b(e) {
      var t = [],
        n = [];
      for (var a of e != null ? e : [])
        try {
          var i = o("WAWebWidFactory").createWid(a);
          (i.isUser() || i.isBot()) && t.push(i);
        } catch (e) {
          n.push(e);
        }
      return (
        n.length > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[botReplaceMentionWidsWithPushnames] skipped ",
                  " invalid quoted mention jids",
                ])),
              n.length,
            )
            .catching(r("getErrorSafe")(n[0]))
            .sendLogs("bot-mention-quoted-jid-invalid"),
        t
      );
    }
    function v(e, t) {
      var n = new Map();
      return (
        [].concat(e, t).forEach(function (e) {
          n.set(e.toString(), e);
        }),
        Array.from(n.values())
      );
    }
    ((l.replaceMentionsInText = d),
      (l.buildMentionMap = m),
      (l.replaceMentionsInMsgText = y),
      (l.replaceMentionWidsWithPushnames = C));
  },
  98,
);
