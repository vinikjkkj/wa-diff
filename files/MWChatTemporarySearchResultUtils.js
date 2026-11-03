__d(
  "MWChatTemporarySearchResultUtils",
  [
    "fbt",
    "I64",
    "LSContactBitOffset",
    "LSContactTypeExact",
    "LSContactViewerRelationship",
    "LSIntEnum",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(t) {
      var n = t.contactTypeExact;
      if (
        (e || (e = o("I64"))).equal(
          n,
          (u || (u = o("LSIntEnum"))).ofNumber(
            r("LSContactTypeExact").GENERATIVE_AI_BOT,
          ),
        )
      ) {
        var a = t.contactViewerRelationship;
        return (e || (e = o("I64"))).equal(
          a,
          (u || (u = o("LSIntEnum"))).ofNumber(
            r("LSContactViewerRelationship").NOT_CONTACT,
          ),
        );
      }
      return o("LSContactBitOffset").hasWithDefault(64, t, !0);
    }
    function d() {
      var e = s._(/*BTDS*/ "AI").toString();
      return e;
    }
    function m(t, n) {
      n === void 0 && (n = !1);
      var a = t.contactTypeExact;
      return (e || (e = o("I64"))).equal(
        a,
        (u || (u = o("LSIntEnum"))).ofNumber(
          r("LSContactTypeExact").GENERATIVE_AI_BOT,
        ),
      )
        ? d()
        : n
          ? p()
          : "";
    }
    function p() {
      return s._(/*BTDS*/ "Your contacts").toString();
    }
    function _() {
      return s._(/*BTDS*/ "Recent searches").toString();
    }
    ((l.isViewerUnconnectedForContact = c),
      (l.getSectionHeaderForAIBot = d),
      (l.getSectionHeaderForContact = m),
      (l.getSectionHeaderForContactsNullstate = p),
      (l.getSectionHeaderForRecentSearches = _));
  },
  226,
);
