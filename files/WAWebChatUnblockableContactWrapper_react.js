__d(
  "WAWebChatUnblockableContactWrapper.react",
  [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebChatContact.react",
    "WAWebContactGetters",
    "WAWebDropdownItem.react",
    "WAWebFrontendContactGetters",
    "WAWebNoop",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = o("WAWebChatContact.react").ContactFactory();
    function m(e) {
      var t = e.active,
        n = e.allowBlockedContacts,
        a = e.checked,
        i = e.contact,
        l = e.customSecondaryText,
        m = e.disabled,
        p = m === void 0 ? !1 : m,
        _ = e.ephemeralIcon,
        f = e.hideYouSuffix,
        g = f === void 0 ? !1 : f,
        h = e.onSelect,
        y = e.role,
        C = e.theme,
        b = c(null),
        v = b[0],
        S = b[1],
        R = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsGroup,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          o("WAWebFrontendContactGetters").getPendingAction,
          o("WAWebContactGetters").getShortName,
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getIsMe,
        ]),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[5],
        x = R[6],
        $ = function () {
          S(null);
        },
        P = function () {
          ($(),
            i
              .addPendingAction(o("WAWebBlockContactAction").unblockContact(i))
              .catch(r("WAWebNoop")));
        },
        N = function (t) {
          var e = [
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: P,
                children: s._(/*BTDS*/ "Unblock {contact}", [
                  s._param("contact", T || D),
                ]),
              },
              "unblock",
            ),
          ];
          S({ contactId: L.toString(), menu: e, event: t.event });
        },
        M = function (t) {
          if (!p) {
            if (n) {
              h();
              return;
            }
            if (v) {
              $();
              return;
            } else if (k) {
              N({ event: t });
              return;
            }
            h();
          }
        },
        w;
      v &&
        (w = u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ChatContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
        }));
      var A = l !== "" ? l : null;
      k &&
        !n &&
        (A = p
          ? s._(/*BTDS*/ "Blocked")
          : s._(/*BTDS*/ "Blocked. Click to unblock"));
      var F = "chat-checkbox";
      return (
        (p || (k && !n)) &&
          (F =
            C === "multi-select-chat-list"
              ? "chat-checkbox-disabled"
              : "chat-checkbox-no-delete"),
        u.jsxs("span", {
          "aria-hidden": !0,
          children: [
            u.jsx(d, {
              theme: F,
              active: t,
              contact: i,
              onClick: p ? null : M,
              secondary: A,
              waitIdle: !0,
              ephemeralIcon: _,
              hideStatus: x,
              showMessageYourselfName: x,
              hideYouSuffix: g,
              truncateName: !0,
              role: y,
              checked: a,
            }),
            w,
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
