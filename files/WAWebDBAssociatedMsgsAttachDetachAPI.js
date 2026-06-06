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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Attach", "Detach"]);
    async function u(e) {
      var t = await c(
          e.map(function (e) {
            return e.id;
          }),
        ),
        n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(
            t.map(function (e) {
              return e.msgKey.toString();
            }),
            !1,
          ),
        a = m(n.filter(Boolean), s.Attach).filter(Boolean);
      await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(a);
      var i = new Map();
      (a.forEach(function (e) {
        var t = r("nullthrows")(e.viewMode);
        i.set(e.id, t);
      }),
        o("WAWebBackendApi").frontendFireAndForget("updateViewModeForMsgs", {
          msgIdsViewModeMap: i,
        }));
    }
    async function c(t) {
      if (
        !o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      )
        return [];
      var n = await o(
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
    }
    function d(e, t) {
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
    function m(e, t) {
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
    function p(e) {
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
      (l.getAssociatedMsgsByParentMsgKeyFromAssociationTable = c),
      (l.getValidAssociatedMsgs = d),
      (l.getDetachedForeverAssociatedMsgs = p));
  },
  98,
);
