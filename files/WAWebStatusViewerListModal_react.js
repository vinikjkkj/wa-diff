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
        s = new (o("WATimeUtils").MonotonicTimer)(),
        c = null;
      for (var d of a) {
        if (i.length >= n) break;
        var m = s.elapsed();
        if (m > l) {
          c = m;
          break;
        }
        !r.has(d.id.toString()) &&
          d.searchMatchExact(e, t) != null &&
          i.push(d);
      }
      return (
        c != null &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[status-search] timeout ",
                "ms limit=",
                "ms",
              ])),
            c,
            l,
          ),
        i
      );
    }
    function $(e) {
      var t = e.msgId,
        a = e.onClose,
        i = e.viewers,
        l = f(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        u = g(null),
        c = h(""),
        m = c[0],
        y = c[1],
        C = r("useWAWebDebouncedSearch")(),
        v = C[0],
        S = C[1];
      (_(
        function () {
          return a;
        },
        [a],
      ),
        _(function () {
          var e = u.current;
          if (e) {
            var t = o("WAWebKeyboardTabUtils").getNextTabbableElement(
              e,
              o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
              o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              void 0,
            );
            t != null && t.focus();
          }
        }, []));
      var R = r("WAWebNoop"),
        $ = r("useWAWebReactions")([t.toString()], R),
        N = f(
          function () {
            return D($.reactionArrayEmojis);
          },
          [$.reactionArrayEmojis],
        ),
        M =
          o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts ===
          "none",
        w = r("WAWebAuraGating").isStatusSearchEnabled(),
        A = v.trim() !== "",
        F = o("WAWebL10NAccentFold").accentFold(v.trim()),
        O = o("WAWebPhoneNumberSearch").numberSearch(F),
        B = f(
          function () {
            return T(i, N);
          },
          [i, N],
        ),
        W = f(
          function () {
            var e = new Set();
            for (var t of B) {
              var n = t.participant.id;
              e.add(n.toString());
              var r = o("WAWebApiContact").getAlternateUserWid(
                o("WAWebWidFactory").asUserWidOrThrow(n),
              );
              r != null && e.add(r.toString());
            }
            return e;
          },
          [B],
        ),
        q = f(
          function () {
            return M
              ? []
              : A
                ? B.filter(function (e) {
                    return e.participant.contact.searchMatchExact(F, O) != null;
                  })
                : B;
          },
          [B, F, O, A, M],
        ),
        U = f(
          function () {
            var e = E - q.length;
            return !A || !w || M || e <= 0 ? [] : x(F, O, e, W);
          },
          [A, w, M, q.length, W, F, O],
        ),
        V = p(
          function (e) {
            (y(e), S(e));
          },
          [S],
        ),
        H = (function () {
          return M
            ? d.jsx(o("WAWebStatusViewerEmptyStates.react").NoViews, {
                readReceiptsOff: !0,
              })
            : q.length > 0
              ? d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(o("WAWebFlatList.react").FlatList, {
                      flatListController: l,
                      direction: "vertical",
                      forceConsistentRenderCount: !0,
                      data: q,
                      renderItem: P,
                    }),
                    d.jsx(r("WAWebStatusViewerHaventViewedSection.react"), {
                      contacts: U,
                    }),
                  ],
                })
              : U.length > 0
                ? d.jsx(r("WAWebStatusViewerHaventViewedSection.react"), {
                    contacts: U,
                  })
                : A
                  ? d.jsx(
                      o("WAWebStatusViewerEmptyStates.react").NoContactsFound,
                      {},
                    )
                  : d.jsx(o("WAWebStatusViewerEmptyStates.react").NoViews, {
                      readReceiptsOff: !1,
                    });
        })(),
        G = M ? 0 : B.length,
        z = M
          ? s._(/*BTDS*/ "Views not available")
          : s._(/*BTDS*/ "Viewed by {status-viewer-count}", [
              s._param("status-viewer-count", G),
            ]),
        j = k(B.length, w, M),
        K = { width: L, height: I(q.length, U.length, A, j ? b : 0) };
      return d.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.StatusViewerList,
        dimensions: K,
        tsNavigationData: { surface: "status-viewer-list" },
        children: d.jsxs(r("WAWebDrawer.react"), {
          theme: "settings",
          ref: u,
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              onCancel: a,
              title: z,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            }),
            j && n("cr:6034") != null
              ? d.jsx(n("cr:6034"), {
                  searchQuery: m,
                  setSearchQuery: V,
                  className: "xdx6fka xvtqlqk xefnzgg",
                })
              : null,
            d.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [l],
              children: H,
            }),
          ],
        }),
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      return d.jsx(r("WAWebStatusViewerCell.react"), { viewerData: e });
    }
    ((P.displayName = P.name + " [from " + i.id + "]"), (l.default = $));
  },
  226,
);
