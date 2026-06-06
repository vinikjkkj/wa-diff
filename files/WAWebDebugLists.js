__d(
  "WAWebDebugLists",
  [
    "WALogger",
    "WAWebBizLabelEditingAction",
    "WAWebChatCollection",
    "WAWebLabelCollection",
    "WAWebLabelSync",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebLabelSync").applyMutations(e);
        })),
        c.apply(this, arguments)
      );
    }
    u.doc =
      "Apply lists mutations to the DB. This is used for testing purposes only.";
    function d(t) {
      var n,
        r = (n = window.chat) != null ? n : t;
      if (r == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] listsUnAssignAllListsFromChat: No chat provided",
            ])),
        );
        return;
      }
      var a = r.labels || [];
      if (a.length !== 0) {
        var i = a.map(function (e) {
          return { type: "remove", id: e };
        });
        o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(i, [r]);
      }
    }
    d.doc =
      "Unassign all lists from a provided chat or currently open chat. This is used for testing purposes only.";
    function m(e) {
      if (e == null || e.length === 0) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] listsUnAssignListFromAllChats: No list provided",
            ])),
        );
        return;
      }
      var t = Array.isArray(e) ? e : [e],
        n = new Set(t),
        r = t.map(function (e) {
          return { type: "remove", id: String(e) };
        }),
        a = [];
      (o("WAWebChatCollection").ChatCollection.forEach(function (e) {
        if (e.labels != null && e.labels.length > 0) {
          var t = e.labels.some(function (e) {
            return n.has(e);
          });
          t && a.push(e);
        }
      }),
        a.length !== 0 &&
          o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(r, a));
    }
    m.doc =
      "Unassign a list from all chats. This is used for testing purposes only.";
    function p() {
      o("WAWebChatCollection").ChatCollection.forEach(function (e) {
        e.labels == null || e.labels.length === 0 || d(e);
      });
    }
    p.doc =
      "Clear all custom lists from all chats. This is used for testing purposes only.";
    function _() {
      (p(),
        o("WAWebLabelCollection").LabelCollection.forEach(function (e) {
          e.type === o("WAWebSchemaLabel").ListType.CUSTOM &&
            o("WAWebBizLabelEditingAction").labelDeleteAction(
              e.id,
              e.name,
              e.color == null ? void 0 : Number(e.color),
            );
        }));
    }
    _.doc =
      "Clear all custom lists from all chats and delete all custom lists. This is used for testing purposes only.";
    var f = [
      "\uD83D\uDE00",
      "\uD83D\uDE01",
      "\uD83D\uDE02",
      "\uD83E\uDD23",
      "\uD83D\uDE03",
      "\uD83D\uDE04",
      "\uD83D\uDE05",
      "\uD83D\uDE06",
      "\uD83D\uDE09",
      "\uD83D\uDE0A",
      "\uD83D\uDE0B",
      "\uD83D\uDE0E",
      "\uD83D\uDE0D",
      "\uD83E\uDD70",
      "\uD83D\uDE18",
      "\uD83D\uDE17",
      "\uD83D\uDE19",
      "\uD83D\uDE1A",
      "\uD83D\uDE42",
      "\uD83E\uDD17",
      "\uD83E\uDD29",
      "\uD83E\uDD73",
      "\uD83D\uDE0F",
      "\uD83D\uDE0C",
      "\uD83D\uDE1B",
      "\uD83D\uDE1C",
      "\uD83E\uDD2A",
      "\uD83D\uDE1D",
      "\uD83E\uDD11",
      "\uD83E\uDD20",
      "\uD83E\uDD84",
      "\uD83D\uDC36",
      "\uD83D\uDC31",
      "\uD83D\uDC2D",
      "\uD83D\uDC39",
      "\uD83D\uDC30",
      "\uD83E\uDD8A",
      "\uD83D\uDC3B",
      "\uD83D\uDC3C",
      "\uD83D\uDC28",
      "\uD83C\uDF1F",
      "\u2B50",
      "\uD83C\uDF08",
      "\uD83D\uDD25",
      "\uD83D\uDCA7",
      "\uD83C\uDF38",
      "\uD83C\uDF3A",
      "\uD83C\uDF3B",
      "\uD83C\uDF40",
      "\uD83C\uDFAF",
      "\uD83C\uDFA8",
      "\uD83C\uDFAD",
      "\uD83C\uDFAA",
      "\uD83C\uDFAC",
      "\uD83C\uDFA4",
      "\uD83C\uDFA7",
      "\uD83C\uDFB8",
      "\uD83C\uDFB9",
      "\uD83C\uDFBA",
      "\uD83C\uDFBB",
    ];
    function g() {
      return f[Math.floor(Math.random() * f.length)];
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e != null ? e : {},
            n = t.allCapitalSingleLetter,
            r = n === void 0 ? !1 : n,
            a = t.allEmoji,
            i = a === void 0 ? !1 : a,
            l = t.allNumbers,
            s = l === void 0 ? !1 : l,
            u = t.allSmallSingleLetter,
            c = u === void 0 ? !1 : u,
            d = t.count,
            m = d === void 0 ? 18 : d;
          if (i)
            for (
              var p = [].concat(f).sort(function () {
                  return Math.random() - 0.5;
                }),
                _ = 0;
              _ < m;
              _++
            ) {
              var h = p[_ % p.length];
              yield o("WAWebBizLabelEditingAction").labelAddAction(h, _ % 20);
            }
          else if (s)
            for (var y = 0; y < m; y++)
              yield o("WAWebBizLabelEditingAction").labelAddAction(
                String(y % 10),
                y % 20,
              );
          else if (c)
            for (var C = 0; C < m; C++) {
              var b = String.fromCharCode(97 + (C % 26));
              yield o("WAWebBizLabelEditingAction").labelAddAction(b, C % 20);
            }
          else if (r)
            for (var v = 0; v < m; v++) {
              var S = String.fromCharCode(65 + (v % 26));
              yield o("WAWebBizLabelEditingAction").labelAddAction(S, v % 20);
            }
          else
            for (var R = 0; R < m; R++)
              yield (function (e) {
                if (e === 0)
                  return o("WAWebBizLabelEditingAction").labelAddAction("5", 0);
                if (e === 1)
                  return o("WAWebBizLabelEditingAction").labelAddAction("a", 1);
                if (e === 2)
                  return o("WAWebBizLabelEditingAction").labelAddAction("A", 2);
                if (e === 3)
                  return o("WAWebBizLabelEditingAction").labelAddAction(g(), 3);
                if (e === 4)
                  return o("WAWebBizLabelEditingAction").labelAddAction(
                    "Superlongsinglenamewordwithoutanyspacesorbreaks",
                    4,
                  );
                if (e === 5)
                  return o("WAWebBizLabelEditingAction").labelAddAction(
                    "This is a long name with multiple words that will be truncated",
                    5,
                  );
                {
                  var t = e;
                  return o("WAWebBizLabelEditingAction").labelAddAction(
                    "List " + t,
                    t % 20,
                  );
                }
              })(R);
        })),
        y.apply(this, arguments)
      );
    }
    h.doc =
      'Creates multiple custom labels with various naming patterns. Options: count (default 18), allEmoji, allNumbers, allSmallSingleLetter, allCapitalSingleLetter. Default mixed mode: one digit, one small letter, one capital, one emoji, one long word, one long sentence, rest are "List X".';
    function C() {
      if (
        o("WAWebLabelCollection").LabelCollection.length !== 0 &&
        o("WAWebChatCollection").ChatCollection.length !== 0
      ) {
        var e = o("WAWebLabelCollection").LabelCollection.map(function (e) {
            return {
              type: "add",
              listType: o("WAWebSchemaLabel").ListType.CUSTOM,
              id: e.id,
            };
          }),
          t = o("WAWebChatCollection").ChatCollection.toArray();
        o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(e, t);
      }
    }
    C.doc =
      "Assign all existing lists to all chats. This is used for testing purposes only.";
    function b(e) {
      if (
        o("WAWebLabelCollection").LabelCollection.length !== 0 &&
        o("WAWebChatCollection").ChatCollection.length !== 0
      ) {
        var t = o("WAWebLabelCollection").LabelCollection.toArray(),
          n = 0;
        o("WAWebChatCollection").ChatCollection.forEach(function (r) {
          if (!(Math.random() <= 0.5)) {
            var a = [];
            for (var i of t) {
              if (e != null && a.length >= e) break;
              if (Math.random() > 0.5) {
                var l;
                a.push({
                  type: "add",
                  listType:
                    (l = i.type) != null
                      ? l
                      : o("WAWebSchemaLabel").ListType.CUSTOM,
                  id: i.id,
                });
              }
            }
            a.length > 0 &&
              (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, [
                r,
              ]),
              (n += a.length));
          }
        });
      }
    }
    b.doc =
      "Randomly assign lists to random chats. For each chat with Math.random() > 0.5, assigns lists where Math.random() > 0.5. Optional count param limits max lists per chat. This is used for testing purposes only.";
    var v = {
      applyListsMutations: u,
      listsUnAssignListFromAllChats: m,
      listsUnAssignAllListsFromChat: d,
      listsUnAssignAllListsFromAllChats: p,
      listsUnAssignAllListsAndDeleteAllCustomLists: _,
      listsPopulateCustomLists: h,
      listsAssignAllListsToAllChats: C,
      listsAssignRandomListsToRandomChats: b,
    };
    l.default = v;
  },
  98,
);
