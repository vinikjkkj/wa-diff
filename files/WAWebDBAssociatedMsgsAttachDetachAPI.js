__d(
  "WAWebDBAssociatedMsgsAttachDetachAPI",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendApi",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebMessageAssociationGatingUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Attach", "Detach"]);
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(
              e.map(function (e) {
                return e.id;
              }),
            ),
            n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                t.map(function (e) {
                  return e.msgKey.toString();
                }),
                !1,
              ),
            a = _(n.filter(Boolean), s.Attach).filter(Boolean);
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(a);
          var i = new Map();
          (a.forEach(function (e) {
            var t = r("nullthrows")(e.viewMode);
            i.set(e.id, t);
          }),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateViewModeForMsgs",
              { msgIdsViewModeMap: i },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled()
          )
            return [];
          var n = yield o(
            "WAWebDBGetAssociatedMsgsByParentMsgKey",
          ).bulkGetMessagesByParentMsgKey(t);
          return (
            n.length &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[viewModeUpdate] found associated msgs",
                  ])),
              ),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = [];
      return (
        e.map(function (e) {
          var r = o(
            "WAWebAssociationProcessor",
          ).getAssociationProcessorByAssociationType(e.associationType);
          if (r) {
            var a = !0;
            (t === s.Detach &&
              (a =
                (r == null ? void 0 : r.processorType) ===
                o("WAWebAssociationProcessorConstants").AssociationProcessorType
                  .WithDetachedMessages),
              r && a && n.push(e));
          }
        }),
        n
      );
    }
    function _(e, t) {
      return o(
        "WAWebMessageAssociationGatingUtils",
      ).isMessageAssociationInfraEnabled()
        ? e.map(function (e) {
            if (!e.associationType) return null;
            var n = o(
              "WAWebAssociationProcessor",
            ).getAssociationProcessorByAssociationType(e.associationType);
            return n == null
              ? null
              : babelHelpers.extends({}, e, {
                  viewMode:
                    t === s.Detach
                      ? o("WAWebViewMode.flow").ViewModeType.VISIBLE
                      : n.viewMode,
                });
          })
        : [];
    }
    function f(e) {
      return o(
        "WAWebMessageAssociationGatingUtils",
      ).isMessageAssociationInfraEnabled()
        ? e.map(function (e) {
            if (!e.associationType) return null;
            var t = o(
              "WAWebAssociationProcessor",
            ).getAssociationProcessorByAssociationType(e.associationType);
            return t == null
              ? null
              : babelHelpers.extends({}, e, {
                  viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  parentMsgKey: void 0,
                  associationType: void 0,
                });
          })
        : [];
    }
    ((l.ViewModeUpdateType = s),
      (l.processOrphansFromAssociationsTableForNewMsg = u),
      (l.getAssociatedMsgsByParentMsgKeyFromAssociationTable = d),
      (l.getValidAssociatedMsgs = p),
      (l.getDetachedForeverAssociatedMsgs = f));
  },
  98,
);
