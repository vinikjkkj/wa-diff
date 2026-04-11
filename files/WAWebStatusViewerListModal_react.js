__d(
  "WAWebStatusViewerListModal.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebAuraGating",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebKeyboardTabUtils",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebModal.react",
    "WAWebNoop",
    "WAWebPhoneNumberSearch",
    "WAWebStatusSearchUtils",
    "WAWebStatusViewerCell.react",
    "WAWebStatusViewerEmptyStates.react",
    "WAWebStatusViewerHaventViewedSection.react",
    "WAWebUserPrefsGeneral",
    "WAWebWidFactory",
    "cr:6034",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedSearch",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = 72,
      C = 59,
      b = 48,
      v = 40,
      S = 500,
      R = 100,
      L = 400,
      E = 20;
    function k(e, t, r) {
      return (
        n("cr:6034") != null &&
        t &&
        e > 0 &&
        e <= o("WAWebStatusSearchUtils").getAuraStatusSearchMaxViewers() &&
        !r
      );
    }
    function I(e, t, n, r) {
      var o;
      e > 0 ? (o = y * e) : t > 0 ? (o = 0) : (o = R);
      var a = n && t > 0 ? v + y * t : 0;
      return Math.min(S, o + a + C + r);
    }
    function T(t, n) {
      var r = [],
        a = 0;
      return (
        t.forEach(function (e) {
          var t = e.id.toString();
          if (
            e.id.isLid() &&
            o("WAWebLidMigrationUtils").toPn(e.id) == null &&
            e.contact.username == null
          ) {
            a++;
            return;
          }
          r.push({
            participant: e,
            reactionText: n[t],
            itemKey: t,
            height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT,
          });
        }),
        a > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "status-viewer-list: filtered ",
                  " unresolved LID viewers",
                ])),
              a,
            )
            .sendLogs("status-viewer-list-unresolved-lid"),
        r.sort(function (e, t) {
          return e.reactionText != null && t.reactionText == null
            ? -1
            : e.reactionText == null && t.reactionText != null
              ? 1
              : t.participant.t - e.participant.t;
        }),
        r
      );
    }
    function D(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          e.reactionSenders.forEach(function (e) {
            t[e.senderUserJid] = e.reactionText;
          });
        }),
        t
      );
    }
    function x(e, t, n, r) {
      var a = o("WAWebContactCollection").ContactCollection.getFilteredContacts(
          { showMe: !1 },
        ),
        i = [],
        l = o("WAWebStatusSearchUtils").getAuraStatusSearchTimeoutThreshold(),
        s = new (o("WATimeUtils").MonotonicTimer)();
      for (var c of a) {
        if (i.length >= n) break;
        var d = s.elapsed();
        if (d > l) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[status-search] timeout ",
                "ms limit=",
                "ms",
              ])),
            d,
            l,
          );
          break;
        }
        !r.has(c.id.toString()) &&
          c.searchMatchExact(e, t) != null &&
          i.push(c);
      }
      return i;
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(81),
        a = e.msgId,
        i = e.onClose,
        l = e.viewers,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = new (r("WAWebFlatListController"))()), (t[0] = u))
        : (u = t[0]);
      var c = u,
        m = g(null),
        p = h(""),
        f = p[0],
        y = p[1],
        C = r("useWAWebDebouncedSearch")(),
        v = C[0],
        S = C[1],
        R,
        $;
      (t[1] !== i
        ? ((R = function () {
            return i;
          }),
          ($ = [i]),
          (t[1] = i),
          (t[2] = R),
          (t[3] = $))
        : ((R = t[2]), ($ = t[3])),
        _(R, $));
      var N, M;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            var e = m.current;
            if (e) {
              var t = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                void 0,
              );
              t != null && t.focus();
            }
          }),
          (M = []),
          (t[4] = N),
          (t[5] = M))
        : ((N = t[4]), (M = t[5])),
        _(N, M));
      var w;
      t[6] !== a ? ((w = a.toString()), (t[6] = a), (t[7] = w)) : (w = t[7]);
      var A;
      t[8] !== w ? ((A = [w]), (t[8] = w), (t[9] = A)) : (A = t[9]);
      var F = r("useWAWebReactions")(A, r("WAWebNoop")),
        O;
      t[10] !== F.reactionArrayEmojis
        ? ((O = D(F.reactionArrayEmojis)),
          (t[10] = F.reactionArrayEmojis),
          (t[11] = O))
        : (O = t[11]);
      var B = O,
        W;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = o("WAWebUserPrefsGeneral").getUserPrivacySettings()),
          (t[12] = W))
        : (W = t[12]);
      var q = W.readReceipts === "none",
        U;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = r("WAWebAuraGating").isStatusSearchEnabled()), (t[13] = U))
        : (U = t[13]);
      var V = U,
        H;
      t[14] !== v ? ((H = v.trim()), (t[14] = v), (t[15] = H)) : (H = t[15]);
      var G = H !== "",
        z,
        j;
      t[16] !== v
        ? ((z = o("WAWebL10NAccentFold").accentFold(v.trim())),
          (j = o("WAWebPhoneNumberSearch").numberSearch(z)),
          (t[16] = v),
          (t[17] = z),
          (t[18] = j))
        : ((z = t[17]), (j = t[18]));
      var K = j,
        Q;
      t[19] !== B || t[20] !== l
        ? ((Q = T(l, B)), (t[19] = B), (t[20] = l), (t[21] = Q))
        : (Q = t[21]);
      var X = Q,
        Y;
      if (t[22] !== X) {
        Y = new Set();
        for (var J of X) {
          var Z = J.participant.id;
          Y.add(Z.toString());
          var ee = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(Z),
          );
          ee != null && Y.add(ee.toString());
        }
        ((t[22] = X), (t[23] = Y));
      } else Y = t[23];
      var te = Y,
        ne;
      e: {
        if (q) {
          var re;
          (t[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((re = []), (t[24] = re))
            : (re = t[24]),
            (ne = re));
          break e;
        }
        if (!G) {
          ne = X;
          break e;
        }
        var oe;
        if (t[25] !== z || t[26] !== K || t[27] !== X) {
          var ae;
          (t[29] !== z || t[30] !== K
            ? ((ae = function (t) {
                return t.participant.contact.searchMatchExact(z, K) != null;
              }),
              (t[29] = z),
              (t[30] = K),
              (t[31] = ae))
            : (ae = t[31]),
            (oe = X.filter(ae)),
            (t[25] = z),
            (t[26] = K),
            (t[27] = X),
            (t[28] = oe));
        } else oe = t[28];
        ne = oe;
      }
      var ie = ne,
        le;
      e: {
        var se = E - ie.length;
        if (!G || !V || q || se <= 0) {
          var ue;
          (t[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((ue = []), (t[32] = ue))
            : (ue = t[32]),
            (le = ue));
          break e;
        }
        var ce;
        (t[33] !== z || t[34] !== se || t[35] !== K || t[36] !== te
          ? ((ce = x(z, K, se, te)),
            (t[33] = z),
            (t[34] = se),
            (t[35] = K),
            (t[36] = te),
            (t[37] = ce))
          : (ce = t[37]),
          (le = ce));
      }
      var de = le,
        me;
      t[38] !== S
        ? ((me = function (t) {
            (y(t), S(t));
          }),
          (t[38] = S),
          (t[39] = me))
        : (me = t[39]);
      var pe = me,
        _e;
      e: {
        if (q) {
          var fe;
          (t[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((fe = d.jsx(o("WAWebStatusViewerEmptyStates.react").NoViews, {
                readReceiptsOff: !0,
              })),
              (t[40] = fe))
            : (fe = t[40]),
            (_e = fe));
          break e;
        }
        if (ie.length > 0) {
          var ge;
          t[41] !== ie
            ? ((ge = d.jsx(o("WAWebFlatList.react").FlatList, {
                flatListController: c,
                direction: "vertical",
                forceConsistentRenderCount: !0,
                data: ie,
                renderItem: P,
              })),
              (t[41] = ie),
              (t[42] = ge))
            : (ge = t[42]);
          var he;
          t[43] !== de
            ? ((he = d.jsx(r("WAWebStatusViewerHaventViewedSection.react"), {
                contacts: de,
              })),
              (t[43] = de),
              (t[44] = he))
            : (he = t[44]);
          var ye;
          (t[45] !== ge || t[46] !== he
            ? ((ye = d.jsxs(d.Fragment, { children: [ge, he] })),
              (t[45] = ge),
              (t[46] = he),
              (t[47] = ye))
            : (ye = t[47]),
            (_e = ye));
          break e;
        }
        if (de.length > 0) {
          var Ce;
          (t[48] !== de
            ? ((Ce = d.jsx(r("WAWebStatusViewerHaventViewedSection.react"), {
                contacts: de,
              })),
              (t[48] = de),
              (t[49] = Ce))
            : (Ce = t[49]),
            (_e = Ce));
          break e;
        }
        var be;
        (t[50] !== G
          ? ((be = G
              ? d.jsx(
                  o("WAWebStatusViewerEmptyStates.react").NoContactsFound,
                  {},
                )
              : d.jsx(o("WAWebStatusViewerEmptyStates.react").NoViews, {
                  readReceiptsOff: !1,
                })),
            (t[50] = G),
            (t[51] = be))
          : (be = t[51]),
          (_e = be));
      }
      var ve = _e,
        Se = q ? 0 : X.length,
        Re;
      t[52] !== Se
        ? ((Re = q
            ? s._(/*BTDS*/ "Views not available")
            : s._(/*BTDS*/ "Viewed by {status-viewer-count}", [
                s._param("status-viewer-count", Se),
              ])),
          (t[52] = Se),
          (t[53] = Re))
        : (Re = t[53]);
      var Le = Re,
        Ee;
      t[54] !== X.length
        ? ((Ee = k(X.length, V, q)), (t[54] = X.length), (t[55] = Ee))
        : (Ee = t[55]);
      var ke = Ee,
        Ie = ke ? b : 0,
        Te;
      t[56] !== de.length || t[57] !== ie.length || t[58] !== G || t[59] !== Ie
        ? ((Te = I(ie.length, de.length, G, Ie)),
          (t[56] = de.length),
          (t[57] = ie.length),
          (t[58] = G),
          (t[59] = Ie),
          (t[60] = Te))
        : (Te = t[60]);
      var De;
      t[61] !== Te
        ? ((De = { width: L, height: Te }), (t[61] = Te), (t[62] = De))
        : (De = t[62]);
      var xe = De,
        $e;
      t[63] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = { surface: "status-viewer-list" }), (t[63] = $e))
        : ($e = t[63]);
      var Pe;
      t[64] !== i || t[65] !== Le
        ? ((Pe = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onCancel: i,
            title: Le,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
          })),
          (t[64] = i),
          (t[65] = Le),
          (t[66] = Pe))
        : (Pe = t[66]);
      var Ne;
      t[67] !== pe || t[68] !== f || t[69] !== ke
        ? ((Ne =
            ke && n("cr:6034") != null
              ? d.jsx(n("cr:6034"), {
                  searchQuery: f,
                  setSearchQuery: pe,
                  className: "xdx6fka xvtqlqk xefnzgg",
                })
              : null),
          (t[67] = pe),
          (t[68] = f),
          (t[69] = ke),
          (t[70] = Ne))
        : (Ne = t[70]);
      var Me;
      t[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = [c]), (t[71] = Me))
        : (Me = t[71]);
      var we;
      t[72] !== ve
        ? ((we = d.jsx(r("WAWebDrawerBody.react"), {
            flatListControllers: Me,
            children: ve,
          })),
          (t[72] = ve),
          (t[73] = we))
        : (we = t[73]);
      var Ae;
      t[74] !== Pe || t[75] !== Ne || t[76] !== we
        ? ((Ae = d.jsxs(r("WAWebDrawer.react"), {
            theme: "settings",
            ref: m,
            children: [Pe, Ne, we],
          })),
          (t[74] = Pe),
          (t[75] = Ne),
          (t[76] = we),
          (t[77] = Ae))
        : (Ae = t[77]);
      var Fe;
      return (
        t[78] !== xe || t[79] !== Ae
          ? ((Fe = d.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.StatusViewerList,
              dimensions: xe,
              tsNavigationData: $e,
              children: Ae,
            })),
            (t[78] = xe),
            (t[79] = Ae),
            (t[80] = Fe))
          : (Fe = t[80]),
        Fe
      );
    }
    function P(e) {
      return d.jsx(r("WAWebStatusViewerCell.react"), { viewerData: e });
    }
    ((P.displayName = P.name + " [from " + i.id + "]"), (l.default = $));
  },
  226,
);
