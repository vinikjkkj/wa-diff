__d(
  "WAWebContactsAndGroupsMessageAction",
  [
    "WAWebContactsAndGroupsContactActions",
    "WAWebContactsAndGroupsMessageCard.react",
    "WAWebContactsAndGroupsPageEvents",
    "WDSDialogBridge",
    "react",
    "useWAWebListener",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(
          r("WAWebContactsAndGroupsMessageCard.react"),
          {
            contact: e,
            onClose: o("WDSDialogBridge").closeWDSDialog,
            onUnblock: function () {
              return o(
                "WAWebContactsAndGroupsContactActions",
              ).unblockContactFromContactsAndGroups(e, function (t) {
                return s.jsx(d, { contact: e, children: t });
              });
            },
          },
          e.id.toString(),
        ),
      );
    }
    function d(e) {
      var t = e.children,
        n = e.contact,
        a = u(!0);
      return (
        o("useWAWebListener").useListener(
          o("WAWebContactsAndGroupsPageEvents").contactsAndGroupsPageEvents,
          "close",
          function () {
            a.current = !1;
          },
        ),
        r("useWAWebOnUnmount")(function () {
          a.current && c(n);
        }),
        t
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.openContactsAndGroupsMessage = c));
  },
  98,
);
