__d(
  "WAWebAttachVcardsFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBizBotTosUtils",
    "WAWebSelectModal.react",
    "WAWebSendContactsAction",
    "WAWebUsernameGatingUtils",
    "WAWebVcardConfirmModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFilteredContacts",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = n("$InternalEnum").Mirrored(["Select", "Confirm"]);
    function m(e) {
      var t = o("useWAWebFlow").useFlow(d.Select),
        a = t[0],
        i = t[1],
        l = c([]),
        m = r("useWAWebFilteredContacts")();
      if (i.step == null) return null;
      var p;
      switch (i.step) {
        case d.Select: {
          var _ = function (t) {
              var e = t.selectedItems;
              (i.push(d.Confirm), (l.current = e));
            },
            f = function () {
              return l.current;
            },
            g = o("WAWebABProps").getABPropConfigValue("group_size_limit");
          p = u.jsx(o("WAWebSelectModal.react").SelectModal, {
            title: s._(/*BTDS*/ "Send contacts"),
            onCancel: function () {
              (e.onCancel(), i.pop());
            },
            contacts: m,
            onConfirm: _,
            getInitialItems: f,
            listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
            maxItems: g,
            includeYouSection: o(
              "WAWebUsernameGatingUtils",
            ).phoneNumberSharingFlowEnabled(),
            allowBlockedContacts: !0,
            allowUnknownUsernameContactSearch: !1,
            tsNavigationData: { surface: "unknown", viewName: "attach-vcards" },
          });
          break;
        }
        case d.Confirm: {
          var h = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var a;
                i.end();
                var l = e.chat;
                yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(l);
                var s = l.composeQuotedMsg;
                l.composeQuotedMsg = null;
                var u =
                  ((a = l.getComposeContents()) == null
                    ? void 0
                    : a.ctwaContext) || void 0;
                (r("WAWebSendContactsAction")(t, l, s, u, n),
                  e.onContactsSent());
              },
            );
            return function (n, r) {
              return t.apply(this, arguments);
            };
          })();
          p = u.jsx(r("WAWebVcardConfirmModal.react"), {
            contactList: l.current,
            onSend: function (t) {
              return void h(l.current, t);
            },
            onBack: function () {
              i.pop();
            },
            chat: e.chat,
          });
          break;
        }
      }
      return u.jsx(a, { flow: i, children: p });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
