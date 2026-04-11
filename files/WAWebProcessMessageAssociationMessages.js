__d(
  "WAWebProcessMessageAssociationMessages",
  [
    "WALogger",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSortUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationValidation",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        var n = e,
          r = d(n, t),
          a = r.nonOrphansFromCache,
          i = r.orphans;
        return p(i, a);
      }
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              e.length === 0 ||
              !o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            )
          ) {
            var n = yield o("WAWebAddonProcessMsgsUtils").queryParentMsgs(e),
              r = n[0],
              a = n[1],
              i = o("WAWebAddonSortUtils").collectValidAndOrphans(a, r),
              l = i.nonOrphans,
              s = i.orphans,
              u = l.length + s.length === e.length;
            if (!u)
              throw new (o(
                "WAWebMessageAssociationValidation",
              ).MessageAssociationInfraError)(
                o("WAWebMessageAssociationValidation")
                  .MessageAssociationInfraErrorCode
                  .MESSAGE_ASSOCIATIONS_MISMATCH,
              );
            var c = m(s, t),
              d = c.nonOrphansFromCache,
              _ = c.orphans;
            return p(_, [].concat(l, d));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n = [],
        r = [];
      return (
        e.forEach(function (e) {
          t.has(e.parentMsgKey.toString()) ? n.push(e) : r.push(e);
        }),
        { orphans: n, nonOrphansFromCache: r }
      );
    }
    function m(e, t) {
      var n = [],
        r = [];
      return (
        e.forEach(function (e) {
          t.has(e.parentMsgKey.toString()) ? r.push(e) : n.push(e);
        }),
        { orphans: n, nonOrphansFromCache: r }
      );
    }
    function p(t, n) {
      var r = [],
        a = [],
        i = 0,
        l = [];
      (t.forEach(function (e) {
        var t = o("WAWebAssociationProcessor").getAssociationProcessor(e);
        (t || (i++, l.length < 3 && l.push(e.id.toString())),
          (t == null ? void 0 : t.processorType) ===
          o("WAWebAssociationProcessorConstants").AssociationProcessorType
            .WithDetachedMessages
            ? a.push(e)
            : r.push(e));
      }),
        i > 0 &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "classifyAssociatedMsgs: no processor for ",
                " msgs: ",
                "",
              ])),
            i,
            l,
          ));
      var s = a.map(function (e) {
          return babelHelpers.extends({}, e, {
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          });
        }),
        u = [].concat(n, s),
        c = new Map();
      return (
        u.forEach(function (e) {
          c.set(e.id.toString(), e);
        }),
        {
          orphanAssociatedMsgs: r,
          validAssociatedMsgs: c,
          detachedAssociatedMsgs: s,
        }
      );
    }
    ((l.classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache = s),
      (l.classifyAssociatedMsgsUsingExistingParentsCache = u),
      (l.collectOrphansFromMissingParentsCache = d),
      (l.collectOrphansFromExistingParentsMessagesCache = m),
      (l.classifyAssociatedOrphansNonOrphans = p));
  },
  98,
);
