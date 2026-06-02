__d(
  "WAWebDebugLists",
  [
    "WALogger",
    "WAWebBizLabelEditingAction",
    "WAWebChatCollection",
    "WAWebLabelCollection",
    "WAWebLabelSync",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      await r("WAWebLabelSync").applyMutations(e);
    }
    u.doc =
      "Apply lists mutations to the DB. This is used for testing purposes only.";
    function c(t) {
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
    c.doc =
      "Unassign all lists from a provided chat or currently open chat. This is used for testing purposes only.";
    function d(e) {
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
    d.doc =
      "Unassign a list from all chats. This is used for testing purposes only.";
    function m() {
      o("WAWebChatCollection").ChatCollection.forEach(function (e) {
        e.labels == null || e.labels.length === 0 || c(e);
      });
    }
    m.doc =
      "Clear all custom lists from all chats. This is used for testing purposes only.";
    function p() {
      (m(),
        o("WAWebLabelCollection").LabelCollection.forEach(function (e) {
          e.type === o("WAWebSchemaLabel").ListType.CUSTOM &&
            o("WAWebBizLabelEditingAction").labelDeleteAction(
              e.id,
              e.name,
              e.color == null ? void 0 : Number(e.color),
            );
        }));
    }
    p.doc =
      "Clear all custom lists from all chats and delete all custom lists. This is used for testing purposes only.";
    var _ = [
      "\u{1F600}",
      "\u{1F601}",
      "\u{1F602}",
      "\u{1F923}",
      "\u{1F603}",
      "\u{1F604}",
      "\u{1F605}",
      "\u{1F606}",
      "\u{1F609}",
      "\u{1F60A}",
      "\u{1F60B}",
      "\u{1F60E}",
      "\u{1F60D}",
      "\u{1F970}",
      "\u{1F618}",
      "\u{1F617}",
      "\u{1F619}",
      "\u{1F61A}",
      "\u{1F642}",
      "\u{1F917}",
      "\u{1F929}",
      "\u{1F973}",
      "\u{1F60F}",
      "\u{1F60C}",
      "\u{1F61B}",
      "\u{1F61C}",
      "\u{1F92A}",
      "\u{1F61D}",
      "\u{1F911}",
      "\u{1F920}",
      "\u{1F984}",
      "\u{1F436}",
      "\u{1F431}",
      "\u{1F42D}",
      "\u{1F439}",
      "\u{1F430}",
      "\u{1F98A}",
      "\u{1F43B}",
      "\u{1F43C}",
      "\u{1F428}",
      "\u{1F31F}",
      "\u2B50",
      "\u{1F308}",
      "\u{1F525}",
      "\u{1F4A7}",
      "\u{1F338}",
      "\u{1F33A}",
      "\u{1F33B}",
      "\u{1F340}",
      "\u{1F3AF}",
      "\u{1F3A8}",
      "\u{1F3AD}",
      "\u{1F3AA}",
      "\u{1F3AC}",
      "\u{1F3A4}",
      "\u{1F3A7}",
      "\u{1F3B8}",
      "\u{1F3B9}",
      "\u{1F3BA}",
      "\u{1F3BB}",
    ];
    function f() {
      return _[Math.floor(Math.random() * _.length)];
    }
    async function g(e) {
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
          var p = [].concat(_).sort(function () {
              return Math.random() - 0.5;
            }),
            g = 0;
          g < m;
          g++
        ) {
          var h = p[g % p.length];
          await o("WAWebBizLabelEditingAction").labelAddAction(h, g % 20);
        }
      else if (s)
        for (var y = 0; y < m; y++)
          await o("WAWebBizLabelEditingAction").labelAddAction(
            String(y % 10),
            y % 20,
          );
      else if (c)
        for (var C = 0; C < m; C++) {
          var b = String.fromCharCode(97 + (C % 26));
          await o("WAWebBizLabelEditingAction").labelAddAction(b, C % 20);
        }
      else if (r)
        for (var v = 0; v < m; v++) {
          var S = String.fromCharCode(65 + (v % 26));
          await o("WAWebBizLabelEditingAction").labelAddAction(S, v % 20);
        }
      else
        for (var R = 0; R < m; R++)
          await (function (e) {
            if (e === 0)
              return o("WAWebBizLabelEditingAction").labelAddAction("5", 0);
            if (e === 1)
              return o("WAWebBizLabelEditingAction").labelAddAction("a", 1);
            if (e === 2)
              return o("WAWebBizLabelEditingAction").labelAddAction("A", 2);
            if (e === 3)
              return o("WAWebBizLabelEditingAction").labelAddAction(f(), 3);
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
    }
    g.doc =
      'Creates multiple custom labels with various naming patterns. Options: count (default 18), allEmoji, allNumbers, allSmallSingleLetter, allCapitalSingleLetter. Default mixed mode: one digit, one small letter, one capital, one emoji, one long word, one long sentence, rest are "List X".';
    function h() {
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
    h.doc =
      "Assign all existing lists to all chats. This is used for testing purposes only.";
    function y(e) {
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
    y.doc =
      "Randomly assign lists to random chats. For each chat with Math.random() > 0.5, assigns lists where Math.random() > 0.5. Optional count param limits max lists per chat. This is used for testing purposes only.";
    var C = {
      applyListsMutations: u,
      listsUnAssignListFromAllChats: d,
      listsUnAssignAllListsFromChat: c,
      listsUnAssignAllListsFromAllChats: m,
      listsUnAssignAllListsAndDeleteAllCustomLists: p,
      listsPopulateCustomLists: g,
      listsAssignAllListsToAllChats: h,
      listsAssignRandomListsToRandomChats: y,
    };
    l.default = C;
  },
  98,
);
