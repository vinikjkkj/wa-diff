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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = o("WAWebChatContact.react").ContactFactory();
    function m(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.active,
        a = e.allowBlockedContacts,
        i = e.checked,
        l = e.contact,
        m = e.customSecondaryText,
        p = e.disabled,
        _ = e.ephemeralIcon,
        f = e.hideYouSuffix,
        g = e.onSelect,
        h = e.role,
        y = e.theme,
        C = p === void 0 ? !1 : p,
        b = f === void 0 ? !1 : f,
        v = c(null),
        S = v[0],
        R = v[1],
        L;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var E;
        ((L = [
          (E = o("WAWebContactGetters")).getId,
          E.getIsGroup,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          o("WAWebFrontendContactGetters").getPendingAction,
          E.getShortName,
          E.getName,
          E.getIsMe,
        ]),
          (t[0] = L));
      } else L = t[0];
      var k = o("useWAWebContactValues").useContactValues(l.id, L),
        I = k[0],
        T = k[2],
        D = k[4],
        x = k[5],
        $ = k[6],
        P;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            R(null);
          }),
          (t[1] = P))
        : (P = t[1]);
      var N = P,
        M;
      t[2] !== l
        ? ((M = function () {
            (N(),
              l
                .addPendingAction(
                  o("WAWebBlockContactAction").unblockContact(l),
                )
                .catch(r("WAWebNoop")));
          }),
          (t[2] = l),
          (t[3] = M))
        : (M = t[3]);
      var w = M,
        A;
      t[4] !== I || t[5] !== x || t[6] !== D || t[7] !== w
        ? ((A = function (t) {
            var e = [
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: w,
                  children: s._(/*BTDS*/ "Unblock {contact}", [
                    s._param("contact", D || x),
                  ]),
                },
                "unblock",
              ),
            ];
            R({ contactId: I.toString(), menu: e, event: t.event });
          }),
          (t[4] = I),
          (t[5] = x),
          (t[6] = D),
          (t[7] = w),
          (t[8] = A))
        : (A = t[8]);
      var F = A,
        O;
      t[9] !== a ||
      t[10] !== S ||
      t[11] !== C ||
      t[12] !== T ||
      t[13] !== g ||
      t[14] !== F
        ? ((O = function (t) {
            if (!C) {
              if (a) {
                g();
                return;
              }
              if (S) {
                N();
                return;
              } else if (T) {
                F({ event: t });
                return;
              }
              g();
            }
          }),
          (t[9] = a),
          (t[10] = S),
          (t[11] = C),
          (t[12] = T),
          (t[13] = g),
          (t[14] = F),
          (t[15] = O))
        : (O = t[15]);
      var B = O,
        W;
      if (S) {
        var q;
        (t[16] !== S
          ? ((q = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ChatContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: S }),
            })),
            (t[16] = S),
            (t[17] = q))
          : (q = t[17]),
          (W = q));
      }
      var U = m !== "" ? m : null;
      if (T && !a) {
        var V;
        (t[18] !== C
          ? ((V = C
              ? s._(/*BTDS*/ "Blocked")
              : s._(/*BTDS*/ "Blocked. Click to unblock")),
            (t[18] = C),
            (t[19] = V))
          : (V = t[19]),
          (U = V));
      }
      var H = "chat-checkbox";
      (C || (T && !a)) &&
        (H =
          y === "multi-select-chat-list"
            ? "chat-checkbox-disabled"
            : "chat-checkbox-no-delete");
      var G = C ? null : B,
        z;
      t[20] !== n ||
      t[21] !== i ||
      t[22] !== l ||
      t[23] !== H ||
      t[24] !== _ ||
      t[25] !== b ||
      t[26] !== $ ||
      t[27] !== h ||
      t[28] !== U ||
      t[29] !== G
        ? ((z = u.jsx(d, {
            theme: H,
            active: n,
            contact: l,
            onClick: G,
            secondary: U,
            waitIdle: !0,
            ephemeralIcon: _,
            hideStatus: $,
            showMessageYourselfName: $,
            hideYouSuffix: b,
            truncateName: !0,
            role: h,
            checked: i,
          })),
          (t[20] = n),
          (t[21] = i),
          (t[22] = l),
          (t[23] = H),
          (t[24] = _),
          (t[25] = b),
          (t[26] = $),
          (t[27] = h),
          (t[28] = U),
          (t[29] = G),
          (t[30] = z))
        : (z = t[30]);
      var j;
      return (
        t[31] !== z || t[32] !== W
          ? ((j = u.jsxs("span", { "aria-hidden": !0, children: [z, W] })),
            (t[31] = z),
            (t[32] = W),
            (t[33] = j))
          : (j = t[33]),
        j
      );
    }
    l.default = m;
  },
  226,
);
