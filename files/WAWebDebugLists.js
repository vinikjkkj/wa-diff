__d(
  "WAWebDebugLists",
  [
    "WALogger",
    "WAWebBizLabelEditingAction",
    "WAWebChatCollection",
    "WAWebLabelCollection",
    "WAWebLabelSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaLabel",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      (r("vulture")("1Ioar3vQ1qkZbYJX4IyVrpSj1g8="),
        await r("WAWebLabelSync").applyMutations(e));
    }
    u.doc =
      "Apply lists mutations to the DB. This is used for testing purposes only.";
    function c(t) {
      var n;
      r("vulture")("VyECohy32pa63r84_A2_HkmUy8E=");
      var a = (n = window.chat) != null ? n : t;
      if (a == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] listsUnAssignAllListsFromChat: No chat provided",
            ])),
        );
        return;
      }
      var i = a.labels || [];
      if (i.length !== 0) {
        var l = i.map(function (e) {
          return { type: "remove", id: e };
        });
        o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(l, [a]);
      }
    }
    c.doc =
      "Unassign all lists from a provided chat or currently open chat. This is used for testing purposes only.";
    function d(e) {
      if (
        (r("vulture")("tEYJWyF_bnJbwzkAwlgUooYZUlA="),
        e == null || e.length === 0)
      ) {
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
        a = t.map(function (e) {
          return { type: "remove", id: String(e) };
        }),
        i = [];
      (o("WAWebChatCollection").ChatCollection.forEach(function (e) {
        if (e.labels != null && e.labels.length > 0) {
          var t = e.labels.some(function (e) {
            return n.has(e);
          });
          t && i.push(e);
        }
      }),
        i.length !== 0 &&
          o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, i));
    }
    d.doc =
      "Unassign a list from all chats. This is used for testing purposes only.";
    function m() {
      (r("vulture")("_fEycbXmQ7ZoS10CWYmFu1dgbIQ="),
        o("WAWebChatCollection").ChatCollection.forEach(function (e) {
          e.labels == null || e.labels.length === 0 || c(e);
        }));
    }
    m.doc =
      "Clear all custom lists from all chats. This is used for testing purposes only.";
    function p() {
      (r("vulture")("_X3iRlF3OScY9tWgHzIenkGFz_8="),
        m(),
        o("WAWebLabelCollection").LabelCollection.forEach(function (e) {
          e.type === o("WAWebSchemaLabel").ListType.CUSTOM &&
            o("WAWebBizLabelEditingAction").labelDeleteAction({
              color: e.color == null ? void 0 : Number(e.color),
              labelId: e.id,
              name: e.name,
            });
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
      return (
        r("vulture")("8K9l5iBHe-O6-NQciyvzBsolj_Q="),
        _[Math.floor(Math.random() * _.length)]
      );
    }
    async function g(e) {
      r("vulture")("ZJMthr-noHrFDv-hBfIl01IB5lY=");
      var t = e != null ? e : {},
        n = t.allCapitalSingleLetter,
        a = n === void 0 ? !1 : n,
        i = t.allEmoji,
        l = i === void 0 ? !1 : i,
        s = t.allNumbers,
        u = s === void 0 ? !1 : s,
        c = t.allSmallSingleLetter,
        d = c === void 0 ? !1 : c,
        m = t.count,
        p = m === void 0 ? 18 : m;
      if (l)
        for (
          var g = [].concat(_).sort(function () {
              return Math.random() - 0.5;
            }),
            h = 0;
          h < p;
          h++
        ) {
          var y = g[h % g.length];
          await o("WAWebBizLabelEditingAction").labelAddAction(y, h % 20);
        }
      else if (u)
        for (var C = 0; C < p; C++)
          await o("WAWebBizLabelEditingAction").labelAddAction(
            String(C % 10),
            C % 20,
          );
      else if (d)
        for (var b = 0; b < p; b++) {
          var v = String.fromCharCode(97 + (b % 26));
          await o("WAWebBizLabelEditingAction").labelAddAction(v, b % 20);
        }
      else if (a)
        for (var S = 0; S < p; S++) {
          var R = String.fromCharCode(65 + (S % 26));
          await o("WAWebBizLabelEditingAction").labelAddAction(R, S % 20);
        }
      else
        for (var L = 0; L < p; L++)
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
          })(L);
    }
    g.doc =
      'Creates multiple custom labels with various naming patterns. Options: count (default 18), allEmoji, allNumbers, allSmallSingleLetter, allCapitalSingleLetter. Default mixed mode: one digit, one small letter, one capital, one emoji, one long word, one long sentence, rest are "List X".';
    function h() {
      if (
        (r("vulture")("ID7y1owBdjqQtE53KWCKOp2UR2o="),
        o("WAWebLabelCollection").LabelCollection.length !== 0 &&
          o("WAWebChatCollection").ChatCollection.length !== 0)
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
        (r("vulture")("0qX_gaHmZMEFj9vWBczh95LFLgk="),
        o("WAWebLabelCollection").LabelCollection.length !== 0 &&
          o("WAWebChatCollection").ChatCollection.length !== 0)
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
    var C = "99017";
    async function b(e) {
      r("vulture")("-nJlo7VrTRwpasvpulApOWA2h8E=");
      var t = e != null ? e : {},
        n = t.isActive,
        a = n === void 0 ? !0 : n,
        i = Math.floor(Date.now() / 1e3),
        l = {
          operation: "set",
          indexParts: ["label_edit", C],
          value: {
            timestamp: i,
            labelEditAction: {
              name: "To you",
              deleted: !1,
              isActive: a,
              type: o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$LabelEditAction$ListType.MENTIONS_AND_REPLIES,
            },
          },
          timestamp: i,
        };
      await r("WAWebLabelSync").applyMutations([l]);
    }
    b.doc =
      'Seed the "To you" (MENTIONS_AND_REPLIES) preset list via the SyncD receive path, so it appears in the filter pill and "Manage lists" without waiting for mobile sync. Option: isActive (default true) \u2014 pass {isActive: false} to test the disabled/"Available lists" state. Remove it with listsRemoveToYouPresetList. Testing only.';
    async function v() {
      r("vulture")("EUxOWP9ExkK7EPXJ4q7MoNR7Bws=");
      var e = Math.floor(Date.now() / 1e3),
        t = {
          operation: "set",
          indexParts: ["label_edit", C],
          value: { timestamp: e, labelEditAction: { deleted: !0 } },
          timestamp: e,
        };
      await r("WAWebLabelSync").applyMutations([t]);
    }
    v.doc =
      'Remove the debug "To you" preset seeded by listsAddToYouPresetList. Testing only.';
    var S = {
      applyListsMutations: u,
      listsUnAssignListFromAllChats: d,
      listsUnAssignAllListsFromChat: c,
      listsUnAssignAllListsFromAllChats: m,
      listsUnAssignAllListsAndDeleteAllCustomLists: p,
      listsPopulateCustomLists: g,
      listsAssignAllListsToAllChats: h,
      listsAssignRandomListsToRandomChats: y,
      listsAddToYouPresetList: b,
      listsRemoveToYouPresetList: v,
    };
    l.default = S;
  },
  98,
);
