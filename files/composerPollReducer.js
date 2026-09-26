__d(
  "composerPollReducer",
  [
    "Promise",
    "cometUniqueID",
    "composerAttachmentAreaReducer",
    "pollConfig",
    "react-compiler-runtime",
    "useComposerViewStateDispatcher",
    "useGroupsCometPollEditorActionLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      n === void 0 && (n = !1);
      var r = n
        ? m(o("pollConfig").COMPANY_QA_POLL_INITIAL_ITEM_COUNT)
        : e.items;
      return babelHelpers.extends({}, e, {
        isCompanyQaPoll: n,
        items: r,
        targetID: t,
      });
    }
    function u() {
      return "SUPERPOLL";
    }
    function c(e) {
      return e.items
        .map(function (e) {
          return e.attachment;
        })
        .filter(Boolean)
        .some(function (e) {
          return !("entID" in e);
        });
    }
    function d(e, t) {
      var n = {
          collaborationMode: "PUBLIC",
          expirationTime: 0,
          hiddenResult: !1,
          isCompanyQaPoll: !1,
          items: m(o("pollConfig").POLL_INITIAL_ITEM_COUNT),
          selectionMode: "MULTIPLE",
          targetID: null,
        },
        r = e.poll == null ? n : e.poll;
      switch (t.type) {
        case "init_poll":
          return babelHelpers.extends({}, e, {
            poll: s(n, t.targetID, t.isCompanyQaPoll),
          });
        case "add_empty_poll_item":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, { items: r.items.concat(m(1)) }),
          });
        case "set_poll_selection_mode":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, {
              selectionMode: t.pollSelectionMode,
            }),
          });
        case "set_poll_collaboration_mode":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, {
              collaborationMode: t.pollCollaborationMode,
            }),
          });
        case "update_poll_item":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, {
              items: r.items.map(function (e) {
                return e.uid === t.pollItem.uid ? t.pollItem : e;
              }),
            }),
          });
        case "remove_poll_item":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, {
              items: r.items.filter(function (e) {
                return e.uid !== t.pollItem.uid;
              }),
            }),
          });
        case "add_poll_expiration_time":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, {
              expirationTime: t.expirationTime,
            }),
          });
        case "set_poll_hidden":
          return babelHelpers.extends({}, e, {
            poll: babelHelpers.extends({}, r, { hiddenResult: t.hiddenResult }),
          });
        case "clear_poll":
          return babelHelpers.extends({}, e, { poll: void 0 });
        case "REMOVE_ATTACHMENT_TYPE":
          if (["POLL", "COMPANY_POLL"].includes(t.attachmentType))
            return o(
              "composerAttachmentAreaReducer",
            ).removeActiveAttachmentViewStateData(e, t, {
              attachmentType: t.attachmentType,
              field: "poll",
            });
      }
      return e;
    }
    function m(e) {
      for (var t = [], n = 0; n < e; n++)
        t.push({ text: "", uid: r("cometUniqueID")() });
      return t;
    }
    function p() {
      var t = o("react-compiler-runtime").c(30),
        a = r("useComposerViewStateDispatcher")(),
        i = r("useGroupsCometPollEditorActionLogger")(),
        l;
      t[0] !== a || t[1] !== i
        ? ((l = function () {
            (a({ type: "add_empty_poll_item" }), i("CLIENT_OPTION_ADDED"));
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== a
        ? ((s = function (t) {
            a({ expirationTime: t, type: "add_poll_expiration_time" });
          }),
          (t[3] = a),
          (t[4] = s))
        : (s = t[4]);
      var u, c, d;
      t[5] !== a || t[6] !== i
        ? ((u = function (r) {
            return (
              a({ type: "clear_poll" }),
              i("CLIENT_POLL_CREATION_SESSION_ABANDON", r),
              (e || (e = n("Promise"))).resolve(!0)
            );
          }),
          (c = function (t, n) {
            (a({ isCompanyQaPoll: n, targetID: t, type: "init_poll" }),
              i("CLIENT_START_POLL_CREATION", t));
          }),
          (d = function (t) {
            (a({ pollItem: t, type: "remove_poll_item" }),
              t.attachment != null
                ? i("CLIENT_PHOTO_DELETED")
                : i("CLIENT_OPTION_DELETED"));
          }),
          (t[5] = a),
          (t[6] = i),
          (t[7] = u),
          (t[8] = c),
          (t[9] = d))
        : ((u = t[7]), (c = t[8]), (d = t[9]));
      var m, p, _;
      t[10] !== a
        ? ((m = function (t) {
            a({
              pollCollaborationMode: t,
              type: "set_poll_collaboration_mode",
            });
          }),
          (p = function (t) {
            a({ hiddenResult: t, type: "set_poll_hidden" });
          }),
          (_ = function (t) {
            a({ pollSelectionMode: t, type: "set_poll_selection_mode" });
          }),
          (t[10] = a),
          (t[11] = m),
          (t[12] = p),
          (t[13] = _))
        : ((m = t[11]), (p = t[12]), (_ = t[13]));
      var f;
      t[14] !== a || t[15] !== i
        ? ((f = function (t, n) {
            (a({
              pollItem: babelHelpers.extends({}, t, { attachment: n }),
              type: "update_poll_item",
            }),
              n != null && n.state === "UPLOADED" && i("CLIENT_PHOTO_ADDED"));
          }),
          (t[14] = a),
          (t[15] = i),
          (t[16] = f))
        : (f = t[16]);
      var g;
      t[17] !== a
        ? ((g = function (t, n) {
            a({
              pollItem: babelHelpers.extends({}, t, { text: n }),
              type: "update_poll_item",
            });
          }),
          (t[17] = a),
          (t[18] = g))
        : (g = t[18]);
      var h;
      return (
        t[19] !== l ||
        t[20] !== s ||
        t[21] !== u ||
        t[22] !== c ||
        t[23] !== d ||
        t[24] !== m ||
        t[25] !== p ||
        t[26] !== _ ||
        t[27] !== f ||
        t[28] !== g
          ? ((h = {
              addEmptyPollItem: l,
              addPollExpirationTime: s,
              clearPoll: u,
              initPoll: c,
              removePollItem: d,
              setCollaborationMode: m,
              setPollHidden: p,
              setSelectionMode: _,
              updatePollItemAttachment: f,
              updatePollItemText: g,
            }),
            (t[19] = l),
            (t[20] = s),
            (t[21] = u),
            (t[22] = c),
            (t[23] = d),
            (t[24] = m),
            (t[25] = p),
            (t[26] = _),
            (t[27] = f),
            (t[28] = g),
            (t[29] = h))
          : (h = t[29]),
        h
      );
    }
    ((l.getPollUIType = u),
      (l.hasPendingAttachments = c),
      (l.composerPollReducer = d),
      (l.createPollItems = m),
      (l.useComposerPollItemsHooks = p));
  },
  98,
);
