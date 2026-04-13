__d(
  "WAWebStatusSubtitle.react",
  [
    "fbt",
    "invariant",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebMsgGetters",
    "WAWebMusicStatusAttribution.react",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebStatusCloseFriendsDialog.react",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusNewsletterCTA.react",
    "WAWebStatusSubtitleAttribution.react",
    "WAWebStatusViewerActionWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusViewActionType",
    "WAWebWamEnumTopBarAttributionType",
    "WDSIconWdsIcChannels.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = {
        statusMeta: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      },
      h = 5e3,
      y = 3;
    function C(e) {
      return e === "music"
        ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.MUSIC
        : e === "mention"
          ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
              .MENTION
          : e === "groupStatus"
            ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                .GROUP_STATUS
            : e === "closeFriends"
              ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                  .CLOSE_SHARING
              : e === "externalShare"
                ? o("WAWebWamEnumTopBarAttributionType")
                    .TOP_BAR_ATTRIBUTION_TYPE.CROSSPOSTING
                : e === "newsletterStatus"
                  ? o("WAWebWamEnumTopBarAttributionType")
                      .TOP_BAR_ATTRIBUTION_TYPE.CHANNEL_STATUS
                  : e === "paidPartnership"
                    ? u(!1, "paidPartnership attribution is not tappable")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function b(e, t) {
      return e
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
        : t
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    function v(e, t, n) {
      new (o("WAWebStatusViewerActionWamEvent").StatusViewerActionWamEvent)({
        viewerActionType: o("WAWebWamEnumStatusViewActionType")
          .STATUS_VIEW_ACTION_TYPE.ATTRIBUTION_TAPPED,
        attributionType: C(e),
        statusCategory: b(t, n),
      }).commit();
    }
    function S(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r = f(0),
        a = r[0],
        i = r[1],
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o(
            "WAWebStatusGatingUtils",
          ).isStatusCrosspostingAttributionsEnabled()),
          (n[0] = l))
        : (l = n[0]);
      var s = l,
        u,
        c;
      return (
        n[1] !== e || n[2] !== t
          ? ((u = function () {
              if (!(!s || e <= 1 || !t)) {
                var n = window.setInterval(function () {
                  i(R);
                }, h);
                return function () {
                  window.clearInterval(n);
                };
              }
            }),
            (c = [e, t, s]),
            (n[1] = e),
            (n[2] = t),
            (n[3] = u),
            (n[4] = c))
          : ((u = n[3]), (c = n[4])),
        p(u, c),
        e === 0 ? 0 : a % e
      );
    }
    function R(e) {
      return e + 1;
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.durationInSeconds,
        r = e.playing,
        a = f(n),
        i = a[0],
        l = a[1],
        s = _(null),
        u = _(0),
        c = _(n),
        m,
        g;
      (t[0] !== n
        ? ((m = function () {
            c.current = n;
          }),
          (g = [n]),
          (t[0] = n),
          (t[1] = m),
          (t[2] = g))
        : ((m = t[1]), (g = t[2])),
        p(m, g));
      var h, y;
      (t[3] !== r
        ? ((h = function () {
            if (!r) {
              var e = s.current;
              e != null &&
                ((u.current = u.current + (window.performance.now() - e) / 1e3),
                (s.current = null));
              return;
            }
            s.current = window.performance.now();
            var t,
              n = function () {
                var e = s.current;
                if (e != null) {
                  var r = u.current + (window.performance.now() - e) / 1e3;
                  l(Math.max(0, c.current - r));
                }
                t = window.requestAnimationFrame(n);
              };
            return (
              (t = window.requestAnimationFrame(n)),
              function () {
                window.cancelAnimationFrame(t);
              }
            );
          }),
          (y = [r]),
          (t[3] = r),
          (t[4] = h),
          (t[5] = y))
        : ((h = t[4]), (y = t[5])),
        p(h, y));
      var C;
      t[6] !== i
        ? ((C = o("WAWebStatusExternalShareUtils").formatDuration(
            Math.round(i),
          )),
          (t[6] = i),
          (t[7] = C))
        : (C = t[7]);
      var b;
      return (
        t[8] !== C
          ? ((b = d.jsx("span", { children: C })), (t[8] = C), (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function E(t) {
      var n = o("react-compiler-runtime").c(71),
        a = t.msg,
        i = t.onClickProfile,
        l = t.onDialogDismiss,
        u = t.onDialogOpen,
        c = t.onMentionsClick,
        m = t.playing,
        p = t.status,
        _ = t.statusMediaController,
        f = t.xstyle,
        h = p.contact,
        C;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var b;
        ((C = [
          (b = o("WAWebMsgGetters")).getFirstMusicAnnotationEmbeddedContent,
          b.getStatusMentioned,
          b.getIsGroupStatus,
          b.getIsNewsletterStatus,
          b.getIsSentByMe,
          b.getHasPaidPartnershipLabel,
        ]),
          (n[0] = C));
      } else C = n[0];
      var R = o("useWAWebMsgValues").useMsgValues(a.id, C),
        E = R[0],
        k = R[1],
        I = R[2],
        T = R[3],
        D = R[4],
        x = R[5],
        $,
        P;
      if (
        n[1] !== x ||
        n[2] !== I ||
        n[3] !== T ||
        n[4] !== D ||
        n[5] !== k ||
        n[6] !== a ||
        n[7] !== E ||
        n[8] !== i ||
        n[9] !== l ||
        n[10] !== u ||
        n[11] !== c ||
        n[12] !== m ||
        n[13] !== h ||
        n[14] !== _
      ) {
        var N = o("WAWebContactCollection").ContactCollection.get(a.author);
        (($ = !0),
          I && N != null && o("WAWebContactGetters").getIsMe(N) && ($ = !1));
        var M = o("WAWebStatusExternalShareUtils").getExternalShareInfo(a),
          w = [];
        if (
          x === !0 &&
          o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()
        ) {
          var A;
          n[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = s._(/*BTDS*/ "Paid partnership")), (n[17] = A))
            : (A = n[17]);
          var F;
          (n[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = {
                type: "paidPartnership",
                content: A,
                onClick: null,
                icon: d.jsx(
                  o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
                  { width: 14, height: 14 },
                ),
              }),
              (n[18] = F))
            : (F = n[18]),
            w.push(F),
            ($ = !1));
        }
        if (E != null) {
          var O;
          n[19] !== a || n[20] !== E || n[21] !== m
            ? ((O = d.jsx(
                o("WAWebMusicStatusAttribution.react").MusicAttribution,
                { musicMetadata: E, msg: a, playing: m },
              )),
              (n[19] = a),
              (n[20] = E),
              (n[21] = m),
              (n[22] = O))
            : (O = n[22]);
          var B;
          n[23] !== a || n[24] !== E || n[25] !== _
            ? ((B = function () {
                return o(
                  "WAWebMusicStatusAttribution.react",
                ).showMusicStatusAttributionModal(E, a, _);
              }),
              (n[23] = a),
              (n[24] = E),
              (n[25] = _),
              (n[26] = B))
            : (B = n[26]);
          var W;
          (n[27] !== O || n[28] !== B
            ? ((W = { type: "music", content: O, onClick: B, icon: null }),
              (n[27] = O),
              (n[28] = B),
              (n[29] = W))
            : (W = n[29]),
            w.push(W));
        }
        if (
          k === !0 &&
          o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()
        ) {
          var q;
          n[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = s._(/*BTDS*/ "Mentioned privately")), (n[30] = q))
            : (q = n[30]);
          var U;
          n[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = d.jsx(
                o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
                { width: 14, height: 14 },
              )),
              (n[31] = U))
            : (U = n[31]);
          var V;
          (n[32] !== c
            ? ((V = { type: "mention", content: q, onClick: c, icon: U }),
              (n[32] = c),
              (n[33] = V))
            : (V = n[33]),
            w.push(V));
        }
        if (I && N != null) {
          var H = o("WAWebContactGetters").getIsMe(N),
            G = H
              ? "You"
              : o("WAWebFrontendContactGetters").getFormattedName(N);
          w.push({
            type: "groupStatus",
            content: s._(/*BTDS*/ "Added by {Author Name}", [
              s._param("Author Name", G),
            ]),
            onClick: function () {
              i(N.id);
            },
            icon: null,
          });
        }
        var z = a.statusAudienceMetadata;
        if (
          z != null &&
          o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled()
        ) {
          var j, K;
          if (n[34] !== z.listName) {
            var Q;
            ((K = (Q = z.listName) != null ? Q : s._(/*BTDS*/ "Close friends")),
              (n[34] = z.listName),
              (n[35] = K));
          } else K = n[35];
          var X = K,
            Y = (j = z.listEmoji) != null ? j : "\u2B50",
            J;
          n[36] !== X
            ? ((J = s._(/*BTDS*/ "{List Name}", [s._param("List Name", X)])),
              (n[36] = X),
              (n[37] = J))
            : (J = n[37]);
          var Z;
          n[38] !== D ||
          n[39] !== X ||
          n[40] !== Y ||
          n[41] !== l ||
          n[42] !== u ||
          n[43] !== h
            ? ((Z = function () {
                (u == null || u(),
                  o(
                    "WAWebStatusCloseFriendsDialog.react",
                  ).showCloseFriendsDialog(
                    h == null ? void 0 : h.id,
                    h != null
                      ? o("WAWebFrontendContactGetters").getFormattedName(h)
                      : "",
                    Y,
                    X,
                    D,
                    function () {
                      l == null || l();
                    },
                  ));
              }),
              (n[38] = D),
              (n[39] = X),
              (n[40] = Y),
              (n[41] = l),
              (n[42] = u),
              (n[43] = h),
              (n[44] = Z))
            : (Z = n[44]);
          var ee;
          (n[45] !== J || n[46] !== Z
            ? ((ee = {
                type: "closeFriends",
                content: J,
                onClick: Z,
                icon: null,
              }),
              (n[45] = J),
              (n[46] = Z),
              (n[47] = ee))
            : (ee = n[47]),
            w.push(ee),
            ($ = !0));
        }
        if (M != null) {
          var te = M.durationInSeconds;
          w.push({
            type: "externalShare",
            content: d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              children: [
                d.jsx(o("WAWebFlex.react").FlexItem, {
                  align: "center",
                  grow: 0,
                  shrink: 0,
                  children: M.displayText,
                }),
                M.source ===
                  o("WAWebProtobufsStatusAttributions.pb")
                    .StatusAttribution$ExternalShare$Source.INSTAGRAM &&
                  te != null &&
                  te !== 0 &&
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    children: [
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        className: "x1wbi8v6 x7g7pl8",
                        children: "\u2022",
                      }),
                      d.jsx(L, { durationInSeconds: te, playing: m }),
                    ],
                  }),
              ],
            }),
            onClick: function () {
              o("WAWebExternalLink.react").openExternalLink(M.url);
            },
            icon: o("WAWebStatusExternalShareUtils").getExternalShareIcon(
              M.source,
            ),
          });
        }
        if (
          T &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
        ) {
          var ne;
          n[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((ne = s._(/*BTDS*/ "Channel status")), (n[48] = ne))
            : (ne = n[48]);
          var re;
          (n[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((re = {
                type: "newsletterStatus",
                content: ne,
                onClick: null,
                icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
                  width: 14,
                  height: 14,
                }),
              }),
              (n[49] = re))
            : (re = n[49]),
            w.push(re),
            ($ = !1));
        }
        ((P = w.slice(0, y)),
          (n[1] = x),
          (n[2] = I),
          (n[3] = T),
          (n[4] = D),
          (n[5] = k),
          (n[6] = a),
          (n[7] = E),
          (n[8] = i),
          (n[9] = l),
          (n[10] = u),
          (n[11] = c),
          (n[12] = m),
          (n[13] = h),
          (n[14] = _),
          (n[15] = $),
          (n[16] = P));
      } else (($ = n[15]), (P = n[16]));
      var oe = P,
        ae = S(oe.length, m);
      if (h != null && o("WAWebContactGetters").getIsPSA(h)) return null;
      if (
        a.forwardedNewsletterMessageInfo != null &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterLinksOnStatusConsumptionEnabled()
      ) {
        var ie;
        n[50] !== f
          ? ((ie = [g.statusMeta, f]), (n[50] = f), (n[51] = ie))
          : (ie = n[51]);
        var le;
        return (
          n[52] !== a || n[53] !== ie
            ? ((le = d.jsx(r("WAWebStatusNewsletterCTA.react"), {
                msg: a,
                xstyle: ie,
              })),
              (n[52] = a),
              (n[53] = ie),
              (n[54] = le))
            : (le = n[54]),
          le
        );
      }
      var se = oe.length > 0 ? oe[ae] : null,
        ue;
      n[55] !== f
        ? ((ue = (e || (e = r("stylex")))([f])), (n[55] = f), (n[56] = ue))
        : (ue = n[56]);
      var ce;
      n[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = { className: "x78zum5 x6s0dn4" }), (n[57] = ce))
        : (ce = n[57]);
      var de;
      n[58] !== a.t
        ? ((de = o("WAWebClock").Clock.relativeDateAndTimeStr(a.t)),
          (n[58] = a.t),
          (n[59] = de))
        : (de = n[59]);
      var me;
      n[60] !== de
        ? ((me = d.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            grow: 0,
            shrink: 0,
            children: d.jsx(
              "div",
              babelHelpers.extends({}, ce, {
                children: d.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "persistentAlwaysWhite",
                  maxLines: 1,
                  children: de,
                }),
              }),
            ),
          })),
          (n[60] = de),
          (n[61] = me))
        : (me = n[61]);
      var pe;
      n[62] !== se || n[63] !== $ || n[64] !== I || n[65] !== T
        ? ((pe =
            se != null &&
            d.jsx("span", {
              className: "x17t9dm2 xeuugli",
              children: d.jsx(r("WAWebStatusSubtitleAttribution.react"), {
                onClick:
                  se.onClick != null
                    ? function (e) {
                        (v(se.type, I, T), se.onClick == null || se.onClick(e));
                      }
                    : null,
                icon: se.icon,
                enableChevronIcon: $ && se.type !== "music",
                children: se.content,
              }),
            })),
          (n[62] = se),
          (n[63] = $),
          (n[64] = I),
          (n[65] = T),
          (n[66] = pe))
        : (pe = n[66]);
      var _e;
      return (
        n[67] !== ue || n[68] !== me || n[69] !== pe
          ? ((_e = d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              className: ue,
              children: [me, pe],
            })),
            (n[67] = ue),
            (n[68] = me),
            (n[69] = pe),
            (n[70] = _e))
          : (_e = n[70]),
        _e
      );
    }
    l.default = E;
  },
  226,
);
