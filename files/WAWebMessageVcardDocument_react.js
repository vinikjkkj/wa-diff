__d(
  "WAWebMessageVcardDocument.react",
  [
    "fbt",
    "WAMemoizeOne",
    "WAWebMessageMultiVcard.react",
    "WAWebMessageVcard.react",
    "WAWebMsgModelPropUtils",
    "WAWebServerPropConstants",
    "WAWebVcardGetNameFromParsed",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect;
    function p(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.onMessageClick,
        c = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaBlob",
          "mediaStage",
          "parsedVcards",
          "size",
        ]),
        p = function () {
          i.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .MSG_RENDER,
            isUserInitiated: !1,
          });
        };
      m(function () {
        o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()) &&
          c.size <=
            o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB *
              1024 &&
          p();
      }, []);
      var _ = d(
          r("WAMemoizeOne")(function (e) {
            var t = e.parsedVcards;
            return t
              ? t.map(function (e) {
                  return {
                    parsedVcard: e,
                    displayName:
                      o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(
                        e,
                      ) || s._(/*BTDS*/ "Contact"),
                    isMultiVcard: !1,
                    vcard: "",
                  };
                })
              : [];
          }),
          [],
        ),
        f = c.parsedVcards;
      return f
        ? f.length > 1
          ? u.jsx(r("WAWebMessageMultiVcard.react"), {
              msg: i,
              vcardList: _({ parsedVcards: f }),
              quotedMsg: e.getQuotedMsg(),
              displayType: a,
              displayAuthor: n,
            })
          : u.jsx(r("WAWebMessageVcard.react"), {
              msg: i,
              vcard: f[0],
              quotedMsg: e.getQuotedMsg(),
              displayType: a,
              displayAuthor: n,
              onMessageClick: l,
            })
        : u.jsx(r("WAWebMessageVcard.react"), {
            mediaStage: (t = i.mediaData) == null ? void 0 : t.mediaStage,
            msg: i,
            vcard: null,
            quotedMsg: e.getQuotedMsg(),
            displayType: a,
            displayAuthor: n,
            onMessageClick: l,
            downloadMedia: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
              ? p
              : null,
            placeholder: !0,
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
