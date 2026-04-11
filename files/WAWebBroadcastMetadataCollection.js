__d(
  "WAWebBroadcastMetadataCollection",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudienceExpressionTypes",
    "WAWebBaseModel",
    "WAWebBroadcastDatabaseJob",
    "WAWebBroadcastMetadataModel",
    "WAWebContactCollection",
    "WAWebDebounce",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebStaleBaseCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$BroadcastMetadataCollection$p_1 = r("WAWebDebounce")(
              function () {
                return e.$BroadcastMetadataCollection$p_2();
              },
              u,
            )),
            (e.findImpl = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n,
                    r = o("WAWebWidFactory").createWid(
                      o("WAWebBaseModel").idTypeToString(e),
                    ),
                    a = yield o(
                      "WAWebBroadcastDatabaseJob",
                    ).getBroadcastMetadataJob(r);
                  if (a == null)
                    return {
                      audienceExpression: o("WAWebAudienceExpressionTypes")
                        .DEFAULT_AUDIENCE_EXPRESSION,
                      id: r,
                      recipients: [],
                    };
                  var i =
                    (t =
                      (n = a.recipients) == null
                        ? void 0
                        : n.map(function (e) {
                            return { id: o("WAWebWidFactory").createWid(e) };
                          })) != null
                      ? t
                      : [];
                  return {
                    audienceExpression: a.audienceExpression,
                    id: o("WAWebWidFactory").createWid(a.id),
                    recipients: i,
                  };
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            o("WAWebLabelCollection").LabelCollection.forEach(function (t) {
              e.$BroadcastMetadataCollection$p_3(t);
            }),
            e.listenTo(
              o("WAWebLabelCollection").LabelCollection,
              "add",
              function (t) {
                e.$BroadcastMetadataCollection$p_3(t);
              },
            ),
            e.listenTo(
              o("WAWebLabelCollection").LabelCollection,
              "remove",
              function (t) {
                e.stopListening(t.labelItemCollection);
              },
            ),
            e.listenTo(
              o("WAWebContactCollection").ContactCollection,
              "add remove",
              e.$BroadcastMetadataCollection$p_1,
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$BroadcastMetadataCollection$p_3 = function (t) {
            var e = this;
            this.listenTo(t.labelItemCollection, "add remove", function (t) {
              e.$BroadcastMetadataCollection$p_4(t);
            });
          }),
          (i.$BroadcastMetadataCollection$p_4 = function (n) {
            var t = this;
            if (
              n.parentType ===
              o("WAWebListItemParentType").LabelItemParentType.Contact
            ) {
              var r = n.labelId;
              this.forEach(function (n) {
                var a,
                  i =
                    (a = n.get("audienceExpression")) != null
                      ? a
                      : o("WAWebAudienceExpressionTypes")
                          .DEFAULT_AUDIENCE_EXPRESSION;
                o("WAWebAudienceExpressionTypes").expressionUsesLabel(i, r) &&
                  t
                    .findImpl(n.id)
                    .then(function (e) {
                      var r = t.get(n.id);
                      r != null &&
                        (r.set("audienceExpression", e.audienceExpression),
                        r.recipients.reset(),
                        e.recipients.forEach(function (e) {
                          r.recipients.add({ id: e.id });
                        }));
                    })
                    .catch(function (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[broadcast:metadata] update failed on label change",
                            ])),
                        )
                        .verbose()
                        .sendLogs(
                          "broadcast-metadata-collection-failed-to-update-metadata",
                        );
                    });
              });
            }
          }),
          (i.$BroadcastMetadataCollection$p_2 = function () {
            var e = this;
            o("WAWebABProps").getABPropConfigValue(
              "m2_audience_dynamic_rules",
            ) &&
              this.forEach(function (t) {
                var n,
                  r =
                    (n = t.get("audienceExpression")) != null
                      ? n
                      : o("WAWebAudienceExpressionTypes")
                          .DEFAULT_AUDIENCE_EXPRESSION;
                r.type ===
                  o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE &&
                  r.predicateType ===
                    o("WAWebAudienceExpressionTypes")
                      .PREDICATE_TYPE_ALL_CONTACTS &&
                  e
                    .findImpl(t.id)
                    .then(function (n) {
                      var r = e.get(t.id);
                      r != null &&
                        (r.set("audienceExpression", n.audienceExpression),
                        r.recipients.reset(),
                        n.recipients.forEach(function (e) {
                          r.recipients.add({ id: e.id });
                        }));
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[broadcast:metadata] update failed on contact change",
                            ])),
                        )
                        .verbose()
                        .catching(e)
                        .sendLogs(
                          "broadcast-metadata-collection-failed-to-update-metadata-contacts",
                        );
                    });
              });
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebBroadcastMetadataModel");
    var d = new c();
    l.default = d;
  },
  98,
);
