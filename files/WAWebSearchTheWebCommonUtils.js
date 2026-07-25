__d(
  "WAWebSearchTheWebCommonUtils",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCellV2.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSearchTextIcon.react",
    "WAWebSearchTheWebEventLogger",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumStwFormat",
    "WAWebWamEnumStwInteraction",
    "WDSIconIcGoogleLensIcon.react",
    "WDSIconIcInfo.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        paddingEnd4: { paddingInlineEnd: "x1uc92m", $$css: !0 },
        paddingVert4: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      },
      m = n("$InternalEnum").Mirrored(["TEXT", "URL", "IMAGE"]),
      p = 24,
      _ = 24;
    function f() {
      return s._(/*BTDS*/ "Check your internet connection and try again.");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e, id: t }),
      );
    }
    function h() {
      return s._(/*BTDS*/ "Get more info about this message.");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Search on web");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Search on web");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Search");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.entryPoint,
        n = e.isNewsletter,
        r = e.messageType,
        a = e.stwFormat,
        i = function () {
          o("WAWebSearchTheWebEventLogger").logSTWEvent({
            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
              .LEARN_MORE_CLICKED,
            stwEntryPoint: t,
            stwFormat: a,
            messageType: r,
          });
        };
      return n
        ? s._(
            /*BTDS*/ "Searching for more info will upload only this update to Google. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
                  onClick: i,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "Searching for more info will upload only this message to Google. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
                  onClick: i,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
    }
    function S() {
      return s._(/*BTDS*/ "This message will not be shared with WhatsApp.");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      switch (e) {
        case m.TEXT:
          return u.jsx(o("WAWebSearchTextIcon.react").SearchTextIcon, {
            height: p,
            width: _,
          });
        case m.IMAGE:
          return u.jsx(r("WDSIconIcGoogleLensIcon.react"), {
            height: p,
            width: _,
          });
        case m.URL:
          return u.jsx(r("WDSIconIcInfo.react"), { height: p, width: _ });
      }
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      switch (e) {
        case m.TEXT:
          return s._(/*BTDS*/ "Search for text");
        case m.IMAGE:
          return s._(/*BTDS*/ "Search for image");
        case m.URL:
          return o(
            "WAWebSTWGatingUtils",
          ).isSearchTheWebDesignExperimentV1Enabled()
            ? s._(/*BTDS*/ "Search for link info")
            : s._(/*BTDS*/ "More info about link");
      }
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(18),
        a = e.onSearchClick,
        i = e.searchType,
        l = c(!1),
        s = l[0],
        m = l[1],
        p;
      t[0] !== i ? ((p = R(i)), (t[0] = i), (t[1] = p)) : (p = t[1]);
      var _, h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [d.paddingEnd4, d.paddingVert4]),
          (h = [d.paddingEnd4, d.paddingVert4]),
          (t[2] = _),
          (t[3] = h))
        : ((_ = t[2]), (h = t[3]));
      var y;
      t[4] !== a
        ? ((y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              r("WAWebNetworkStatus").online
                ? (m(!0),
                  yield a(),
                  m(!1),
                  new (o(
                    "WAWebHfmTextSearchCompleteWamEvent",
                  ).HfmTextSearchCompleteWamEvent)().commit(),
                  o("WAWebModalManager").ModalManager.close())
                : g(f());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[4] = a),
          (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== i ? ((C = L(i)), (t[6] = i), (t[7] = C)) : (C = t[7]);
      var b;
      t[8] !== C
        ? ((b = u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            color: "primary",
            paddingStart: 12,
            children: C,
          })),
          (t[8] = C),
          (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== s
        ? ((v = s
            ? u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 20,
                color: "accent",
              })
            : null),
          (t[10] = s),
          (t[11] = v))
        : (v = t[11]);
      var S;
      return (
        t[12] !== s || t[13] !== p || t[14] !== y || t[15] !== b || t[16] !== v
          ? ((S = u.jsx(o("WAWebFlex.react").FlexItem, {
              testid: "search-modal-row",
              paddingTop: 8,
              paddingBottom: 8,
              children: u.jsx(r("WAWebCellV2.react"), {
                detailLeft: p,
                containerXStyle: _,
                primaryRightXStyle: h,
                disabled: s,
                onClick: y,
                primary: b,
                alignDetailRight: "start",
                primaryRight: v,
              }),
            })),
            (t[12] = s),
            (t[13] = p),
            (t[14] = y),
            (t[15] = b),
            (t[16] = v),
            (t[17] = S))
          : (S = t[17]),
        S
      );
    }
    function k(e) {
      var t = Array.from(e.keys());
      if (t.length === 1) {
        var n = t[0];
        switch (n) {
          case m.TEXT:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_TEXT;
          case m.URL:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_LINK;
          case m.IMAGE:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_IMAGE;
        }
      } else if (t.length === 2) {
        if (t.includes(m.URL) && t.includes(m.TEXT))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_TEXT;
        if (t.includes(m.URL) && t.includes(m.IMAGE))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE;
        if (t.includes(m.TEXT) && t.includes(m.IMAGE))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_IMAGE_TEXT;
      }
      return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE_TEXT;
    }
    ((l.SearchType = m),
      (l.getNoInternetToastMsg = f),
      (l.showSearchFailureToast = g),
      (l.getHFMHeaderText = h),
      (l.getHFMHeaderCTAText = y),
      (l.getModalTitleText = C),
      (l.getModalSearchActionText = b),
      (l.getModalHeaderText = v),
      (l.getModalHeaderSubtext = S),
      (l.SearchModalRow = E),
      (l.getSTWFormat = k));
  },
  226,
);
