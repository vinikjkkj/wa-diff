__d(
  "WAWebSearchTheWebGetSupportedSearchOptions",
  [
    "fbt",
    "WALogger",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMiscErrors",
    "WAWebMsgActionCapability",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSTWImage",
    "WAWebSTWText",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebWamEnumStwInteraction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    function c(t) {
      var a = o("WAWebFrontendMsgGetters").getText(t),
        i = o("WAWebMsgLinks").getLinksFromMsg(t),
        l = new Map();
      if (
        i.length > 0 &&
        o("WAWebSTWGatingUtils").isSearchTheWebURLSearchEnabled()
      ) {
        var s = i[0].href;
        l.set(o("WAWebSearchTheWebCommonUtils").SearchType.URL, {
          handleSearchAction: function (t) {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebSTWText").createUrlSearchLink(s),
              ));
          },
        });
      }
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
        o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(
          t.unsafe(),
          o("WAWebFrontendMsgGetters").getChat(t),
        )
      ) {
        var c,
          m = (c = t.mediaObject) == null ? void 0 : c.filehash;
        if (
          m != null &&
          o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(m)
        ) {
          var p = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            m,
          );
          p != null &&
            l.set(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE, {
              handleSearchAction: function (a) {
                o("WAWebSearchTheWebEventLogger").logSTWEvent(a);
                function t(e) {
                  return i.apply(this, arguments);
                }
                function i() {
                  return (
                    (i = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        try {
                          if (!r("WAWebNetworkStatus").online)
                            throw (
                              o(
                                "WAWebSearchTheWebCommonUtils",
                              ).showSearchFailureToast(
                                o(
                                  "WAWebSearchTheWebCommonUtils",
                                ).getNoInternetToastMsg(),
                              ),
                              new (o("WAWebMiscErrors").GoogleLensApiError)(
                                o("WAWebSTWImage").LensApiErrorType
                                  .NO_INTERNET_CONNECTION,
                              )
                            );
                          var n = yield o("WAWebSTWImage").getImageSearchUrl(t);
                          if (n == null)
                            throw new (o("WAWebMiscErrors").GoogleLensApiError)(
                              o("WAWebSTWImage").LensApiErrorType
                                .NO_REDIRECT_URL,
                            );
                          if (n.includes("consent"))
                            throw new (o("WAWebMiscErrors").GoogleLensApiError)(
                              o("WAWebSTWImage").LensApiErrorType
                                .CONSENT_FORM_IN_URL,
                            );
                          ((a.stwInteraction = o(
                            "WAWebWamEnumStwInteraction",
                          ).STW_INTERACTION.IMAGE_SEARCH_REDIRECT),
                            o("WAWebSearchTheWebEventLogger").logSTWEvent(a),
                            o("WAWebExternalLink.react").openExternalLink(n));
                        } catch (t) {
                          ((a.stwInteraction = o(
                            "WAWebWamEnumStwInteraction",
                          ).STW_INTERACTION.IMAGE_SEARCH_FAILED),
                            (a.stwLensApiErrorType = o(
                              "WAWebSTWImage",
                            ).getImageSearchWamErrorType(r("getErrorSafe")(t))),
                            o("WAWebSearchTheWebEventLogger").logSTWEvent(a),
                            o(
                              "WAWebSearchTheWebCommonUtils",
                            ).showSearchFailureToast(u()),
                            o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Error while running image seach on web",
                                  ])),
                              )
                              .tags("STW"));
                        }
                      },
                    )),
                    i.apply(this, arguments)
                  );
                }
                return t(p);
              },
            });
        }
      }
      return (
        a != null &&
          o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() &&
          d(a, i) &&
          l.set(o("WAWebSearchTheWebCommonUtils").SearchType.TEXT, {
            handleSearchAction: function (t) {
              (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
                o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebSTWText").createTextSearchLink(a),
                ));
            },
          }),
        l
      );
    }
    function d(e, t) {
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
    l.getSupportedSearchOptions = c;
  },
  226,
);
