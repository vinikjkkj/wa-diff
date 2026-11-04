__d(
  "WAWebCustomerManagerSearchValueStore",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerSearchValueCache",
    "WAWebL10N",
    "WAWebLabelCollection",
    "WAWebLabelItemModel",
    "WAWebLabelModel",
    "WAWebUIListener",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e === void 0 &&
        (e = new (o(
          "WAWebCustomerManagerSearchValueCache",
        ).CustomerSearchValueCache)());
      var t = 0;
      return {
        cache: e,
        getSnapshot: function () {
          return t;
        },
        subscribe: function (r) {
          var n = function () {
              ((t += 1), r());
            },
            o = s(e, n);
          return (
            e.clear(),
            n(),
            function () {
              (o(), e.clear(), (t += 1));
            }
          );
        },
      };
    }
    function s(e, t) {
      var n,
        a = new Map(),
        i = function (n) {
          e.invalidateCustomer(n);
          var t = o("WAWebCustomerManagerChatJid").toChatJidOrNull(n);
          if (t != null) {
            var r = o("WAWebWidFactory").createWid(String(t));
            if (r.isUser()) {
              var a = r.isLid()
                ? o("WAWebApiContact").getPnIfLidIsLatestMapping(
                    o("WAWebWidFactory").asUserLidOrThrow(r),
                  )
                : o("WAWebApiContact").getCurrentLid(
                    o("WAWebWidFactory").asUserWidOrThrow(r),
                  );
              a != null && e.invalidateCustomer(String(a));
            }
          }
        },
        l = function (n) {
          n instanceof r("WAWebLabelItemModel") && (i(n.parentId), t());
        },
        s = function (t) {
          var e;
          ((e = a.get(t)) == null ||
            e.forEach(function (e) {
              return e.disengage();
            }),
            a.delete(t));
        },
        c = function (r) {
          e.invalidateLabel(r.id);
          for (var n of r.labelItemCollection.getModelsArray()) i(n.parentId);
          t();
        },
        d = function (t) {
          (s(t.id),
            a.set(t.id, [
              u(t.labelItemCollection, "add remove change", l),
              u(t.labelItemCollection, "reset", function () {
                return c(t);
              }),
            ]));
        },
        m = function (t) {
          t instanceof o("WAWebLabelModel").Label && (d(t), c(t));
        },
        p = function (r) {
          r instanceof o("WAWebLabelModel").Label &&
            (s(r.id), e.invalidateLabel(r.id), t());
        },
        _ = function (r) {
          r instanceof o("WAWebLabelModel").Label &&
            (e.invalidateLabel(r.id), t());
        },
        f = function () {
          (e.clear(), t());
        },
        g = function () {
          for (var e of a.keys()) s(e);
          (o("WAWebLabelCollection")
            .LabelCollection.getModelsArray()
            .forEach(d),
            f());
        },
        h = function (n) {
          n instanceof r("WAWebContactModel") && (i(String(n.id)), t());
        },
        y = function (n) {
          n instanceof o("WAWebChatModel").Chat &&
            (i(String(n.id)),
            n.accountLid != null && i(String(n.accountLid)),
            t());
        },
        C = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var o = t[0],
            a = t[2];
          (a instanceof r("WAWebWid") && i(String(a)), h(o), y(o));
        },
        b = [
          u((n = o("WAWebLabelCollection")).LabelCollection, "add", m),
          u(n.LabelCollection, "remove", p),
          u(n.LabelCollection, "change:name", _),
          u(n.LabelCollection, "reset", g),
          u(
            o("WAWebContactCollection").ContactCollection,
            "add remove change:name change:pushname change:username change:verifiedName change:verifiedLevel change:phoneNumber change:locale change:labels",
            h,
          ),
          u(o("WAWebContactCollection").ContactCollection, "change:id", C),
          u(
            o("WAWebContactCollection").ContactCollection,
            "reset lid-pn-mapping-updated",
            f,
          ),
          u(
            o("WAWebChatCollection").ChatCollection,
            "add remove change:t change:labels",
            y,
          ),
          u(
            o("WAWebChatCollection").ChatCollection,
            "change:id change:accountLid",
            C,
          ),
          u(o("WAWebChatCollection").ChatCollection, "reset", f),
          u(r("WAWebL10N"), "locale_change", f),
        ];
      return (
        n.LabelCollection.getModelsArray().forEach(d),
        function () {
          b.forEach(function (e) {
            return e.disengage();
          });
          for (var e of a.keys()) s(e);
        }
      );
    }
    function u(e, t, n) {
      var r = new (o("WAWebUIListener").Listener)(e, t, n, null, null);
      return (r.engage(), r);
    }
    l.createCustomerSearchValueStore = e;
  },
  98,
);
