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
    "WAWebMsgGetters",
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
    function c(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getText(e);
      return d({
        imageFilehash:
          e.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
          o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(
            e.unsafe(),
            o("WAWebFrontendMsgGetters").getChat(e),
          )
            ? (t = e.mediaData) == null
              ? void 0
              : t.filehash
            : null,
        msgText: n,
        msgUrls:
          n == null
            ? []
            : o("WAWebMsgLinks").getLinksFromText(
                n,
                o("WAWebMsgGetters").getSender(e),
                o("WAWebMsgGetters").getInitialPageSize(e) + 1,
              ),
      });
    }
    function d(t) {
      var a = t.imageFilehash,
        i = t.msgText,
        l = t.msgUrls,
        s = new Map();
      if (
        l.length > 0 &&
        o("WAWebSTWGatingUtils").isSearchTheWebURLSearchEnabled()
      ) {
        var c = l[0].href;
        s.set(o("WAWebSearchTheWebCommonUtils").SearchType.URL, {
          handleSearchAction: function (t) {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebSTWText").createUrlSearchLink(c),
              ));
          },
        });
      }
      if (a != null) {
        var d = a;
        if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(d)) {
          var p = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            d,
          );
          p != null &&
            s.set(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE, {
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
        i != null &&
          o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() &&
          m(i, l) &&
          s.set(o("WAWebSearchTheWebCommonUtils").SearchType.TEXT, {
            handleSearchAction: function (t) {
              (o("WAWebSearchTheWebEventLogger").logSTWEvent(t),
                o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebSTWText").createTextSearchLink(i),
                ));
            },
          }),
        s
      );
    }
    function m(e, t) {
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
    ((l.getSupportedSearchOptions = c), (l.getSupportedSearchOptionsFor = d));
  },
  226,
);
