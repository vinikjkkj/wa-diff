__d(
  "WAWebResponsesListDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebEmptyResponsesList.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebListFilterButton.react",
    "WAWebNewsletterGatingUtils",
    "WAWebQuestions.flow",
    "WAWebQuestionsRenderingUtils",
    "WAWebResponsesRow.react",
    "WAWebSearchHighlightTermsContext.react",
    "WAWebSimpleSearch",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WDSPaddings.stylex",
    "WDSSearchBar.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDebouncedCallback",
    "useWAWebFocusOnMount",
    "useWAWebNewsletterResponseMessages",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = {
        responsesFilters: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          backgroundColor: "x1280gxy",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "x2vl965",
          paddingTop: "x1gxa6cn",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
        scrollContent: {
          height: "x5yr21d",
          overflowX: "x14aock7",
          overflowY: "x1rife3k",
          $$css: !0,
        },
        content: {
          minHeight: "x1us19tq",
          width: "xh8yej3",
          minWidth: "xeuugli",
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(58),
        a = t.isReplyDisabled,
        i = t.question,
        l = r("useWAWebFocusOnMount")(),
        u = f(null),
        d = u[0],
        m = u[1],
        p = f(o("WAWebQuestions.flow").ResponsesFilterType.ALL),
        h = p[0],
        C = p[1],
        S = f(""),
        R = S[0],
        L = S[1],
        E;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function (t) {
            L(t);
          }),
          (n[0] = E))
        : (E = n[0]);
      var k = r("useWAWebDebouncedCallback")(E, 250),
        I;
      n[1] !== R
        ? ((I =
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelsQuestionsSearchEnabled() && R.length >= 3
              ? R
              : void 0),
          (n[1] = R),
          (n[2] = I))
        : (I = n[2]);
      var T = o(
          "useWAWebNewsletterResponseMessages",
        ).useNewsletterQuestionResponses(i, h, I),
        D = T[0],
        x = T[1],
        $ = T[2],
        P = T[3],
        N = T[4],
        M = T[5],
        w = _();
      d == null &&
        x !==
          o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
            .FETCHING &&
        m(
          o("WAWebNewsletterGatingUtils").isChannelsQuestionsSearchEnabled() &&
            D.length > 0,
        );
      var A;
      n[3] !== R
        ? ((A =
            R.trim() !== ""
              ? R.trim().toLowerCase().split(/\s+/).filter(Boolean)
              : null),
          (n[3] = R),
          (n[4] = A))
        : (A = n[4]);
      var F = A,
        O;
      if (n[5] !== R || n[6] !== D) {
        e: {
          var B = R.trim();
          if (B != null && B !== "" && B.length < 3) {
            O = D.filter(function (e) {
              return o("WAWebSimpleSearch").simpleSearch(B, [e.response.body]);
            });
            break e;
          }
          O = D;
        }
        ((n[5] = R), (n[6] = D), (n[7] = O));
      } else O = n[7];
      var W = O,
        q;
      n[8] !== k || n[9] !== N
        ? ((q = function (t) {
            t.length <= 100 && (N(), k(t));
          }),
          (n[8] = k),
          (n[9] = N),
          (n[10] = q))
        : (q = n[10]);
      var U = q,
        V;
      n[11] !== $ || n[12] !== P
        ? ((V = function () {
            if (w.current != null) {
              var e = w.current.scrollHeight,
                t = w.current.scrollTop,
                n = w.current.clientHeight;
              t + n >= e - 150 && P() && $();
            }
          }),
          (n[11] = $),
          (n[12] = P),
          (n[13] = V))
        : (V = n[13]);
      var H = V,
        G;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function () {
            return C(o("WAWebQuestions.flow").ResponsesFilterType.ALL);
          }),
          (n[14] = G))
        : (G = n[14]);
      var z;
      n[15] !== M
        ? ((z = function () {
            return void M();
          }),
          (n[15] = M),
          (n[16] = z))
        : (z = n[16]);
      var j;
      n[17] !== h || n[18] !== x || n[19] !== z
        ? ((j = c.jsx(r("WAWebEmptyResponsesList.react"), {
            selectedFilter: h,
            onViewAllResponses: G,
            onTryAgain: z,
            status: x,
            testid: void 0,
          })),
          (n[17] = h),
          (n[18] = x),
          (n[19] = z),
          (n[20] = j))
        : (j = n[20]);
      var K = j,
        Q;
      e: {
        if (
          x ===
          o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
            .FETCHING
        ) {
          var X;
          (n[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((X = c.jsx(y, { size: 40 })), (n[21] = X))
            : (X = n[21]),
            (Q = X));
          break e;
        }
        if (
          x ===
            o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
              .FETCHING_MORE ||
          x ===
            o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
              .SUCCESS
        ) {
          var Y;
          (n[22] !== K ||
          n[23] !== W ||
          n[24] !== a ||
          n[25] !== i ||
          n[26] !== x
            ? ((Y =
                W.length > 0
                  ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
                      className: (e || (e = r("stylex")))(
                        o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                        g.content,
                      ),
                      align: "stretch",
                      role: "navigation",
                      "aria-label": s
                        ._(/*BTDS*/ "Question responses list")
                        .toString(),
                      children: [
                        W.map(function (e) {
                          return c.jsx(
                            r("WAWebResponsesRow.react"),
                            {
                              question: i,
                              response: e.response,
                              isReplyDisabled: a,
                            },
                            e.response.id.toString(),
                          );
                        }),
                        x ===
                          o("useWAWebNewsletterResponseMessages")
                            .FetchQuestionResponsesStatus.FETCHING_MORE &&
                          c.jsx(y, {
                            size: 32,
                            xstyle:
                              o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
                          }),
                      ],
                    })
                  : K),
              (n[22] = K),
              (n[23] = W),
              (n[24] = a),
              (n[25] = i),
              (n[26] = x),
              (n[27] = Y))
            : (Y = n[27]),
            (Q = Y));
          break e;
        }
        if (
          x ===
            o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
              .ERROR ||
          x ===
            o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
              .OFFLINE
        ) {
          Q = K;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            x,
        );
      }
      var J;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s._(/*BTDS*/ "Responses list drawer")), (n[28] = J))
        : (J = n[28]);
      var Z;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { surface: "unknown", viewName: "responses-list" }),
          (n[29] = Z))
        : (Z = n[29]);
      var ee;
      n[30] !== i.questionResponsesCount
        ? ((ee = s._(
            /*BTDS*/ '_j{"*":"{number} responses","_1":"1 response"}',
            [s._plural(i.questionResponsesCount, "number")],
          )),
          (n[30] = i.questionResponsesCount),
          (n[31] = ee))
        : (ee = n[31]);
      var te;
      n[32] !== ee
        ? ((te = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: ee,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          })),
          (n[32] = ee),
          (n[33] = te))
        : (te = n[33]);
      var ne;
      n[34] !== h || n[35] !== d || n[36] !== U
        ? ((ne =
            d === !0 &&
            c.jsx(b, { selectedFilter: h, updateDebouncedQuery: U })),
          (n[34] = h),
          (n[35] = d),
          (n[36] = U),
          (n[37] = ne))
        : (ne = n[37]);
      var re;
      n[38] !== N || n[39] !== h
        ? ((re = function (t) {
            t !== h && (N(), C(t));
          }),
          (n[38] = N),
          (n[39] = h),
          (n[40] = re))
        : (re = n[40]);
      var oe;
      n[41] !== h || n[42] !== re
        ? ((oe = c.jsx(v, { selectedFilter: h, handleFilterChange: re })),
          (n[41] = h),
          (n[42] = re),
          (n[43] = oe))
        : (oe = n[43]);
      var ae;
      n[44] !== Q || n[45] !== H
        ? ((ae = c.jsx(r("WAWebDrawerBody.react"), {
            ref: w,
            onScroll: H,
            xstyle: g.scrollContent,
            children: Q,
          })),
          (n[44] = Q),
          (n[45] = H),
          (n[46] = ae))
        : (ae = n[46]);
      var ie;
      n[47] !== F || n[48] !== ae
        ? ((ie = c.jsx(r("WAWebSearchHighlightTermsContext.react").Provider, {
            value: F,
            children: ae,
          })),
          (n[47] = F),
          (n[48] = ae),
          (n[49] = ie))
        : (ie = n[49]);
      var le;
      n[50] !== te || n[51] !== ne || n[52] !== oe || n[53] !== ie
        ? ((le = c.jsxs(r("WAWebDrawer.react"), {
            testid: void 0,
            tsNavigationData: Z,
            children: [te, ne, oe, ie],
          })),
          (n[50] = te),
          (n[51] = ne),
          (n[52] = oe),
          (n[53] = ie),
          (n[54] = le))
        : (le = n[54]);
      var se;
      return (
        n[55] !== l || n[56] !== le
          ? ((se = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: l,
              "aria-label": J,
              children: le,
            })),
            (n[55] = l),
            (n[56] = le),
            (n[57] = se))
          : (se = n[57]),
        se
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.size,
        r = e.xstyle,
        a;
      t[0] !== n
        ? ((a = c.jsx(o("WAWebSpinner.react").Spinner, {
            size: n,
            stroke: 4,
            color: "highlight",
          })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a || t[3] !== r
          ? ((i = c.jsx(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              xstyle: r,
              grow: 1,
              children: a,
            })),
            (t[2] = a),
            (t[3] = r),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function C(e) {
      return e === o("WAWebQuestions.flow").ResponsesFilterType.REPLIED
        ? s._(/*BTDS*/ "Search replied responses")
        : e === o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS
          ? s._(/*BTDS*/ "Search contacts")
          : e === o("WAWebQuestions.flow").ResponsesFilterType.ALL
            ? s._(/*BTDS*/ "Search responses")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.selectedFilter,
        a = e.updateDebouncedQuery,
        i = f(""),
        l = i[0],
        s = i[1],
        u;
      t[0] !== a
        ? ((u = function (t) {
            t.length <= 100 && (s(t), a(t));
          }),
          (t[0] = a),
          (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className:
              "xh8yej3 x9f619 x1phvje8 xcldk2z xexx8yu x1g2khh7 x1280gxy",
          }),
          (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] !== n ? ((p = C(n)), (t[3] = n), (t[4] = p)) : (p = t[4]);
      var _;
      return (
        t[5] !== d || t[6] !== l || t[7] !== p
          ? ((_ = c.jsx(
              "div",
              babelHelpers.extends({}, m, {
                children: c.jsx(r("WDSSearchBar.react"), {
                  hintText: p,
                  value: l,
                  onValueChange: d,
                  testid: void 0,
                }),
              }),
            )),
            (t[5] = d),
            (t[6] = l),
            (t[7] = p),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.handleFilterChange,
        a = e.selectedFilter,
        i = _(),
        l;
      return (
        t[0] !== n || t[1] !== a
          ? ((l = c.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              wrap: "wrap",
              rowGap: 8,
              columnGap: 8,
              ref: i,
              xstyle: g.responsesFilters,
              children: Array.from(
                o("WAWebQuestions.flow").ResponsesFilterType.members(),
                function (e) {
                  var t = function () {
                    n(e);
                  };
                  return c.jsx(
                    r("WAWebListFilterButton.react"),
                    {
                      label: o(
                        "WAWebQuestionsRenderingUtils",
                      ).getResponsesFilterLabel(e),
                      onClick: t,
                      selected: a === e,
                      tabOrder:
                        o("WAWebTabOrder").TAB_ORDER.RESPONSES_TAB_FILTERS,
                    },
                    e,
                  );
                },
              ),
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.ResponsesListDrawer = h;
  },
  226,
);
