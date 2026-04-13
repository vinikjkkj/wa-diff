__d(
  "WAWebEventsInChatDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEventUtils",
    "WAWebEventsDrawerEventCell.react",
    "WAWebFlex.react",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebAllEvents",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        footer: {
          position: "x7wzq59",
          bottom: "x1ey2m1c",
          flexGrow: "x1iyjqo2",
          display: "x78zum5",
          alignItems: "xuk3077",
          $$css: !0,
        },
        footerRow: { width: "xh8yej3", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.chat,
        a = e.onBack,
        i = e.onCommunityEventsClick,
        l = e.onEventClick,
        d = e.ref,
        _ = o("useWAWebAllEvents").useAllEvents(n),
        f,
        g;
      if (t[0] !== _ || t[1] !== l) {
        var h = _.reduce(p, [[], []]),
          y = h[0],
          C = h[1],
          b = C.sort(m),
          v;
        (t[4] !== l
          ? ((v = function (t) {
              return u.jsx(
                r("WAWebEventsDrawerEventCell.react"),
                { msg: t.msg, chat: t.chat, onClick: l },
                "event-cell-" + t.msg.id.toString(),
              );
            }),
            (t[4] = l),
            (t[5] = v))
          : (v = t[5]),
          (f = y.map(v)));
        var S;
        (t[6] !== l
          ? ((S = function (t) {
              return u.jsx(
                r("WAWebEventsDrawerEventCell.react"),
                { msg: t.msg, chat: t.chat, passed: !0, onClick: l },
                "event-cell-" + t.msg.id.toString(),
              );
            }),
            (t[6] = l),
            (t[7] = S))
          : (S = t[7]),
          (g = b.map(S)),
          (t[0] = _),
          (t[1] = l),
          (t[2] = f),
          (t[3] = g));
      } else ((f = t[2]), (g = t[3]));
      var R = g,
        L;
      t[8] !== R
        ? ((L =
            R.length > 0
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(o("WAWebText.react").WAWebTextMuted, {
                      xstyle: o("WAWebUISpacing").uiPadding.start16,
                      children: s._(/*BTDS*/ "Past and canceled events"),
                    }),
                    R,
                  ],
                })
              : null),
          (t[8] = R),
          (t[9] = L))
        : (L = t[9]);
      var E = L,
        k,
        I,
        T,
        D,
        x,
        $,
        P;
      if (t[10] !== n.groupMetadata || t[11] !== i || t[12] !== d) {
        var N = o("WAWebGroupType").getGroupTypeFromGroupMetadata(
          o("WAWebStateUtils").unproxy(r("nullthrows")(n.groupMetadata)),
        );
        e: switch (N) {
          case o("WAWebGroupType").GroupType.COMMUNITY: {
            var M;
            (t[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = s._(/*BTDS*/ "Community events")), (t[20] = M))
              : (M = t[20]),
              (P = M));
            break e;
          }
          case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP: {
            var w;
            (t[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = s._(/*BTDS*/ "Events in announcements")), (t[21] = w))
              : (w = t[21]),
              (P = w));
            var A;
            t[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = [
                  c.footer,
                  o("WAWebUISpacing").uiPadding.all16,
                  o("WAWebUISpacing").uiPadding.bottom6,
                ]),
                (t[22] = A))
              : (A = t[22]);
            var F;
            t[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = s._(/*BTDS*/ "See all community events")), (t[23] = F))
              : (F = t[23]);
            var O;
            (t[24] !== i
              ? ((O = u.jsx(r("WAWebDrawerSection.react"), {
                  theme: "full-height",
                  animation: !1,
                  xstyle: A,
                  children: u.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "center",
                    xstyle: c.footerRow,
                    children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                      testid: void 0,
                      onClick: i,
                      children: F,
                    }),
                  }),
                })),
                (t[24] = i),
                (t[25] = O))
              : (O = t[25]),
              (I = O));
            break e;
          }
          default: {
            var B;
            (t[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = s._(/*BTDS*/ "Events")), (t[26] = B))
              : (B = t[26]),
              (P = B));
          }
        }
        ((k = r("WAWebDrawer.react")),
          (x = "striped"),
          ($ = d),
          (D = "events-in-group"),
          (T = o("WAWebGroupType").groupTypeToWamEnum(N)),
          (t[10] = n.groupMetadata),
          (t[11] = i),
          (t[12] = d),
          (t[13] = k),
          (t[14] = I),
          (t[15] = T),
          (t[16] = D),
          (t[17] = x),
          (t[18] = $),
          (t[19] = P));
      } else
        ((k = t[13]),
          (I = t[14]),
          (T = t[15]),
          (D = t[16]),
          (x = t[17]),
          ($ = t[18]),
          (P = t[19]));
      var W;
      t[27] !== T
        ? ((W = { typeOfGroup: T }), (t[27] = T), (t[28] = W))
        : (W = t[28]);
      var q;
      t[29] !== D || t[30] !== W
        ? ((q = { surface: D, extras: W }),
          (t[29] = D),
          (t[30] = W),
          (t[31] = q))
        : (q = t[31]);
      var U;
      t[32] !== a || t[33] !== P
        ? ((U = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: P,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a,
          })),
          (t[32] = a),
          (t[33] = P),
          (t[34] = U))
        : (U = t[34]);
      var V;
      t[35] !== f || t[36] !== E
        ? ((V = u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: [f, E],
          })),
          (t[35] = f),
          (t[36] = E),
          (t[37] = V))
        : (V = t[37]);
      var H;
      t[38] !== I || t[39] !== V
        ? ((H = u.jsxs(r("WAWebDrawerBody.react"), { children: [V, I] })),
          (t[38] = I),
          (t[39] = V),
          (t[40] = H))
        : (H = t[40]);
      var G;
      return (
        t[41] !== k ||
        t[42] !== H ||
        t[43] !== x ||
        t[44] !== $ ||
        t[45] !== q ||
        t[46] !== U
          ? ((G = u.jsxs(k, {
              theme: x,
              ref: $,
              tsNavigationData: q,
              children: [U, H],
            })),
            (t[41] = k),
            (t[42] = H),
            (t[43] = x),
            (t[44] = $),
            (t[45] = q),
            (t[46] = U),
            (t[47] = G))
          : (G = t[47]),
        G
      );
    }
    function m(e, t) {
      return (
        o("WAWebMsgGetters").getEventStartTime(t.msg) -
        o("WAWebMsgGetters").getEventStartTime(e.msg)
      );
    }
    function p(e, t) {
      var n = t.msg;
      return (
        n.isEventCanceled ||
        o("WAWebEventUtils").shouldShowEventAsPassed(
          n.eventStartTime,
          n.eventEndTime,
        )
          ? e[1].push(t)
          : e[0].push(t),
        e
      );
    }
    l.default = d;
  },
  226,
);
