__d(
  "WAWebSearchTheWebCommonUtils",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebCellV2.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebGoogleLensIcon.react",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSTWImage",
    "WAWebSTWText",
    "WAWebSearchTextIcon.react",
    "WAWebSearchTheWebEventLogger",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumStwFormat",
    "WAWebWamEnumStwInteraction",
    "WDSIconIcInfo.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        paddingEnd4: { paddingInlineEnd: "x1uc92m", $$css: !0 },
        paddingVert4: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      },
      p = n("$InternalEnum").Mirrored(["TEXT", "URL", "IMAGE"]),
      _ = 24,
      f = 24;
    function g() {
      return s._(/*BTDS*/ "Check your internet connection and try again.");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: e, id: t }),
      );
    }
    function C(t) {
      if (!o("WAWebSTWGatingUtils").isSearchTheWebEnabled()) return new Map();
      var n = o("WAWebFrontendMsgGetters").getText(t),
        a = o("WAWebMsgLinks").getLinksFromMsg(t),
        i = new Map();
      if (
        a.length > 0 &&
        o("WAWebSTWGatingUtils").isSearchTheWebURLSearchEnabled()
      ) {
        var l = a[0].href;
        i.set(p.URL, {
          handleSearchAction: function (t) {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebSTWText").createUrlSearchLink(l),
              ));
          },
        });
      }
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
        o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(
          t.unsafe(),
          o("WAWebFrontendMsgGetters").getChat(t),
        ) &&
        o("WAWebSTWGatingUtils").isSearchTheWebImageSearchEnabled()
      ) {
        var s,
          u = (s = t.mediaObject) == null ? void 0 : s.filehash;
        if (
          u != null &&
          o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(u)
        ) {
          var c = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            u,
          );
          c != null &&
            i.set(p.IMAGE, {
              handleSearchAction: function (n) {
                o("WAWebSearchTheWebEventLogger").logSTWEvent(n);
                async function t(t) {
                  try {
                    if (!r("WAWebNetworkStatus").online)
                      throw (
                        y(g()),
                        new (o("WAWebMiscErrors").GoogleLensApiError)(
                          o("WAWebSTWImage").LensApiErrorType
                            .NO_INTERNET_CONNECTION,
                        )
                      );
                    var a = await o("WAWebSTWImage").getImageSearchUrl(t);
                    if (a == null)
                      throw new (o("WAWebMiscErrors").GoogleLensApiError)(
                        o("WAWebSTWImage").LensApiErrorType.NO_REDIRECT_URL,
                      );
                    if (a.includes("consent"))
                      throw new (o("WAWebMiscErrors").GoogleLensApiError)(
                        o("WAWebSTWImage").LensApiErrorType.CONSENT_FORM_IN_URL,
                      );
                    ((n.stwInteraction = o(
                      "WAWebWamEnumStwInteraction",
                    ).STW_INTERACTION.IMAGE_SEARCH_REDIRECT),
                      o("WAWebSearchTheWebEventLogger").logSTWEvent(n),
                      o("WAWebExternalLink.react").openExternalLink(a));
                  } catch (t) {
                    ((n.stwInteraction = o(
                      "WAWebWamEnumStwInteraction",
                    ).STW_INTERACTION.IMAGE_SEARCH_FAILED),
                      (n.stwLensApiErrorType = o(
                        "WAWebSTWImage",
                      ).getImageSearchWamErrorType(r("getErrorSafe")(t))),
                      o("WAWebSearchTheWebEventLogger").logSTWEvent(n),
                      y(h()),
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Error while running image seach on web",
                            ])),
                        )
                        .tags("STW"));
                  }
                }
                return t(c);
              },
            });
        }
      }
      return (
        n != null &&
          o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() &&
          b(n, a) &&
          i.set(p.TEXT, {
            handleSearchAction: function (t) {
              (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
                o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebSTWText").createTextSearchLink(n),
                ));
            },
          }),
        i
      );
    }
    function b(e, t) {
      if (t.length === 0) return !0;
      var n = e;
      return (
        t.forEach(function (t) {
          var r = t.href;
          n = e.replace(r, "");
        }),
        n.trim() !== ""
      );
    }
    function v() {
      return s._(/*BTDS*/ "Get more info about this message.");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Search on web");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Search on web");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Search");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t, n, r) {
      var a = function () {
        o("WAWebSearchTheWebEventLogger").logSTWEvent({
          stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
            .LEARN_MORE_CLICKED,
          stwEntryPoint: t,
          stwFormat: n,
          messageType: r,
        });
      };
      return e
        ? s._(
            /*BTDS*/ "Searching for more info will upload only this update to Google. {=m2}",
            [
              s._implicitParam(
                "=m2",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
                  onClick: a,
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
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
                  onClick: a,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
    }
    function k() {
      return s._(/*BTDS*/ "This message will not be shared with WhatsApp.");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      switch (e) {
        case p.TEXT:
          return c.jsx(o("WAWebSearchTextIcon.react").SearchTextIcon, {
            height: _,
            width: f,
          });
        case p.IMAGE:
          return c.jsx(o("WAWebGoogleLensIcon.react").GoogleLensIcon, {
            height: _,
            width: f,
          });
        case p.URL:
          return c.jsx(r("WDSIconIcInfo.react"), { height: _, width: f });
      }
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      switch (e) {
        case p.TEXT:
          return s._(/*BTDS*/ "Search for text");
        case p.IMAGE:
          return s._(/*BTDS*/ "Search for image");
        case p.URL:
          return o(
            "WAWebSTWGatingUtils",
          ).isSearchTheWebDesignExperimentV1Enabled()
            ? s._(/*BTDS*/ "Search for link info")
            : s._(/*BTDS*/ "More info about link");
      }
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onSearchClick,
        a = e.searchType,
        i = d(!1),
        l = i[0],
        s = i[1],
        u;
      t[0] !== a ? ((u = I(a)), (t[0] = a), (t[1] = u)) : (u = t[1]);
      var p, _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [m.paddingEnd4, m.paddingVert4]),
          (_ = [m.paddingEnd4, m.paddingVert4]),
          (t[2] = p),
          (t[3] = _))
        : ((p = t[2]), (_ = t[3]));
      var f;
      t[4] !== n
        ? ((f = async function () {
            r("WAWebNetworkStatus").online
              ? (s(!0),
                await n(),
                s(!1),
                new (o(
                  "WAWebHfmTextSearchCompleteWamEvent",
                ).HfmTextSearchCompleteWamEvent)().commit(),
                o("WAWebModalManager").ModalManager.close())
              : y(g());
          }),
          (t[4] = n),
          (t[5] = f))
        : (f = t[5]);
      var h;
      t[6] !== a ? ((h = T(a)), (t[6] = a), (t[7] = h)) : (h = t[7]);
      var C;
      t[8] !== h
        ? ((C = c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            color: "primary",
            paddingStart: 12,
            children: h,
          })),
          (t[8] = h),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== l
        ? ((b = l
            ? c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 20,
                color: "accent",
              })
            : null),
          (t[10] = l),
          (t[11] = b))
        : (b = t[11]);
      var v;
      return (
        t[12] !== l || t[13] !== u || t[14] !== f || t[15] !== C || t[16] !== b
          ? ((v = c.jsx(o("WAWebFlex.react").FlexItem, {
              testid: "search-modal-row",
              paddingTop: 8,
              paddingBottom: 8,
              children: c.jsx(r("WAWebCellV2.react"), {
                detailLeft: u,
                containerXStyle: p,
                primaryRightXStyle: _,
                disabled: l,
                onClick: f,
                primary: C,
                alignDetailRight: "start",
                primaryRight: b,
              }),
            })),
            (t[12] = l),
            (t[13] = u),
            (t[14] = f),
            (t[15] = C),
            (t[16] = b),
            (t[17] = v))
          : (v = t[17]),
        v
      );
    }
    function x(e) {
      var t = Array.from(e.keys());
      if (t.length === 1) {
        var n = t[0];
        switch (n) {
          case p.TEXT:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_TEXT;
          case p.URL:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_LINK;
          case p.IMAGE:
            return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_IMAGE;
        }
      } else if (t.length === 2) {
        if (t.includes(p.URL) && t.includes(p.TEXT))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_TEXT;
        if (t.includes(p.URL) && t.includes(p.IMAGE))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE;
        if (t.includes(p.TEXT) && t.includes(p.IMAGE))
          return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_IMAGE_TEXT;
      }
      return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE_TEXT;
    }
    ((l.SearchType = p),
      (l.getNoInternetToastMsg = g),
      (l.showSearchFailureToast = y),
      (l.getSupportedSearchOptions = C),
      (l.getHFMHeaderText = v),
      (l.getHFMHeaderCTAText = S),
      (l.getModalTitleText = R),
      (l.getModalSearchActionText = L),
      (l.getModalHeaderText = E),
      (l.getModalHeaderSubtext = k),
      (l.SearchModalRow = D),
      (l.getSTWFormat = x));
  },
  226,
);
