__d(
  "WAWebGroupPastParticipantSearch.react",
  [
    "fbt",
    "WALogger",
    "WAWebElevatedPushNamesFlag",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFlex.react",
    "WAWebGroupParticipantsFlow.react",
    "WAWebGroupPastParticipant.react",
    "WAWebL10NAccentFold",
    "WAWebModalManager",
    "WAWebModalsListModal.react",
    "WAWebPhoneNumberSearch",
    "WAWebSectionHeader.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedSearch",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = { HEADER: "HEADER", ROW: "ROW", DISCLAIMER: "DISCLAIMER" },
      p = o("WAWebModalsListModal.react").ListModalFactory();
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(24),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.chat,
        _ = l.onBack,
        g = l.onClose,
        h = l.onContactInfo,
        C = (t = c.groupMetadata) == null ? void 0 : t.pastParticipants,
        b = r("useWAWebDebouncedSearch")(),
        v = b[0],
        S = b[1],
        R;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["buld_add", "bulk_remove", "reset"]), (n[3] = R))
        : (R = n[3]);
      var L;
      n[4] !== C || n[5] !== v
        ? ((L = function () {
            var e,
              t = o("WAWebL10NAccentFold").accentFold(v),
              n = o("WAWebPhoneNumberSearch").numberSearch(t),
              r =
                (e =
                  C == null
                    ? void 0
                    : C.getValidRecords().filter(function (e) {
                        var r = !t || e.contact.searchMatchExact(t, n);
                        return (
                          !o("WAWebUserPrefsMeUser").isMeAccount(e.id) && r
                        );
                      })) != null
                  ? e
                  : [];
            if (!r.length) return [];
            var a = [];
            return (
              a.push({
                type: m.HEADER,
                header: s._(/*BTDS*/ "Past members"),
                itemKey: "list_header",
              }),
              r.forEach(function (e, t) {
                return a.push({
                  type: m.ROW,
                  participant: e,
                  itemKey: e.id.toString() + "_" + t,
                });
              }),
              a.push({ type: m.DISCLAIMER, itemKey: "list_disclaimer" }),
              a
            );
          }),
          (n[4] = C),
          (n[5] = v),
          (n[6] = L))
        : (L = n[6]);
      var E;
      n[7] !== v ? ((E = [v]), (n[7] = v), (n[8] = E)) : (E = n[8]);
      var k = r("useWAWebEventTargetValue")(C, R, L, E),
        I;
      n[9] !== h
        ? ((I = function (t) {
            if (h) {
              var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(
                t.participant.contact,
              );
              e && (o("WAWebModalManager").ModalManager.close(), h(e));
            }
          }),
          (n[9] = h),
          (n[10] = I))
        : (I = n[10]);
      var T = I,
        D;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Search past members")), (n[11] = D))
        : (D = n[11]);
      var x;
      n[12] !== c || n[13] !== T
        ? ((x = function (t) {
            return d.jsx(f, {
              data: t,
              elevatedPushNamesEnabled: o(
                "WAWebElevatedPushNamesFlag",
              ).elevatedPushNamesM2Enabled(c),
              onClick:
                t.type === m.ROW
                  ? function () {
                      return T(t);
                    }
                  : void 0,
            });
          }),
          (n[12] = c),
          (n[13] = T),
          (n[14] = x))
        : (x = n[14]);
      var $;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = d.jsx(y, {})), (n[15] = $))
        : ($ = n[15]);
      var P;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Search contacts")), (n[16] = P))
        : (P = n[16]);
      var N;
      return (
        n[17] !== k ||
        n[18] !== S ||
        n[19] !== _ ||
        n[20] !== g ||
        n[21] !== i ||
        n[22] !== x
          ? ((N = d.jsx(p, {
              ref: i,
              title: D,
              data: k,
              renderItem: x,
              emptyState: $,
              onSearch: S,
              searchPlaceholder: P,
              onBack: _,
              onCancel: g,
            })),
            (n[17] = k),
            (n[18] = S),
            (n[19] = _),
            (n[20] = g),
            (n[21] = i),
            (n[22] = x),
            (n[23] = N))
          : (N = n[23]),
        N
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.data,
        i = t.elevatedPushNamesEnabled,
        l = t.onClick;
      switch (a.type) {
        case m.HEADER: {
          var s,
            u = (s = a.header) != null ? s : "",
            c;
          return (
            n[0] !== u
              ? ((c = d.jsx(r("WAWebSectionHeader.react"), {
                  header: u,
                  uppercase: !1,
                })),
                (n[0] = u),
                (n[1] = c))
              : (c = n[1]),
            c
          );
        }
        case m.ROW: {
          var p;
          return (
            n[2] !== a.participant || n[3] !== i || n[4] !== l
              ? ((p = d.jsx(r("WAWebGroupPastParticipant.react"), {
                  participant: a.participant,
                  elevatedPushNamesEnabled: i,
                  onClick: l,
                })),
                (n[2] = a.participant),
                (n[3] = i),
                (n[4] = l),
                (n[5] = p))
              : (p = n[5]),
            p
          );
        }
        case m.DISCLAIMER: {
          var _;
          return (
            n[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = d.jsx(h, {})), (n[6] = _))
              : (_ = n[6]),
            _
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: WAWebGroupPastParticipantSearch",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
      }
    }
    var g = {
      row: { height: "xy75621", backgroundColor: "x1280gxy", $$css: !0 },
      disclaimer: { fontSize: "x1f6kntn", color: "xhslqc4", $$css: !0 },
      empty: { fontSize: "x1jchvi3", color: "x181ptb6", $$css: !0 },
    };
    function h() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [g.row, g.disclaimer, o("WAWebUISpacing").uiPadding.horiz15]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = d.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: t,
              align: "center",
              justify: "center",
              children: d.jsx("span", {
                children: s._(
                  /*BTDS*/ "People who left or were removed in the last 60 days. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ),
                  ],
                ),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function y() {
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WAWebSectionHeader.react"), {
            header: s._(/*BTDS*/ "Past members"),
            uppercase: !1,
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [g.row, g.empty],
            align: "center",
            justify: "center",
            children: d.jsx("span", {
              children: r("WAWebFbtCommon")("No results found"),
            }),
          }),
          d.jsx(h, {}),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
