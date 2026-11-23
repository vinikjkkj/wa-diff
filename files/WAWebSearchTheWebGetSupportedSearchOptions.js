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
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
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
      var n = t.imageFilehash,
        a = t.msgText,
        i = t.msgUrls,
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
      if (n != null) {
        var c = n;
        if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(c)) {
          var d = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            c,
          );
          d != null &&
            l.set(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE, {
              handleSearchAction: function (n) {
                o("WAWebSearchTheWebEventLogger").logSTWEvent(n);
                async function t(t) {
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
                      o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(
                        u(),
                      ),
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
                return t(d);
              },
            });
        }
      }
      return (
        a != null &&
          o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() &&
          m(a, i) &&
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
