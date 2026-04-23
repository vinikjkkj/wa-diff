__d(
  "WAWebWamCodegenWamEvent",
  [
    "Promise",
    "WACamelCase",
    "WALogger",
    "WAWebWamCodegenUtils",
    "WAWebWamDroppedEventWamEvent",
    "WAWebWamInitQueue",
    "WAWebWamRuntimeProvider",
    "WAWebWamTypeHash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id", "privateStatsIdInt", "wamChannel", "weight"],
      s,
      u,
      c,
      d,
      m,
      p = 1,
      _ = new WeakMap();
    function f(e) {
      var t = _.get(e);
      if (t == null) {
        t = {};
        for (var n in e) {
          var r = e[n];
          typeof r == "number" && (t[r] = n.toLowerCase());
        }
        _.set(e, t);
      }
      return t;
    }
    var g = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.instanceId = p++),
            (n.eventTime = Date.now()),
            (n.commitTime = void 0),
            (n.startMarkers = {}),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getValue = function (t) {
            return this.all[t];
          }),
          (a.getEventNameForFalco = function () {
            return this.$falcoEventName;
          }),
          (a.resolveEnumValue = function (t, n) {
            var e;
            if (typeof n != "number") return n;
            var r = (e = this.$rawProps) == null ? void 0 : e[t];
            if (r == null) return n;
            var a = r[1];
            if (
              a != null &&
              typeof a == "object" &&
              !Object.values(o("WAWebWamCodegenUtils").TYPES).includes(a)
            ) {
              var i,
                l = f(a);
              return (i = l[n]) != null ? i : n;
            }
            return n;
          }),
          (a.getFieldsMapForFalco = function () {
            var e = this.$falcoFieldMap;
            if (e == null) return null;
            var t = {},
              n = this.all;
            if (n == null) return t;
            for (var r of Object.keys(n)) {
              var o = n[r];
              if (o != null) {
                var a = e[r];
                a != null && (t[a] = o);
              }
            }
            return t;
          }),
          (a.runPreCommitValidation = function () {
            var e = this;
            this.validators.forEach(function (t) {
              var n = t[0],
                a = t[1],
                i = t[2];
              for (var l of n) if (!l(e)) return;
              for (var c of a)
                if (e.getValue(r("WACamelCase")(c)) == null) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ".",
                        " should be nonnull",
                      ])),
                    e.$className,
                    c,
                  );
                  var d = new TypeError(
                    e.$className + "." + c + " should be nonnull",
                  );
                  throw (d.stack, d);
                }
              for (var m of i) {
                var p = m[0],
                  _ = m[1];
                if (!p(e)) {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " event validator failed condition ",
                        "",
                      ])),
                    e.$className,
                    _,
                  );
                  var f = new TypeError(
                    e.$className + " event validator failed condition " + _,
                  );
                  throw (f.stack, f);
                }
              }
            });
          }),
          (a.commit = function () {
            try {
              this.runPreCommitValidation();
            } catch (e) {
              (o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "wam event failed validation: ",
                    "",
                  ])),
                e,
              ),
                new (o("WAWebWamDroppedEventWamEvent").WamDroppedEventWamEvent)(
                  { droppedEventCode: this.id, droppedEventCount: 1 },
                ).commit());
              return;
            }
            var e = o("WAWebWamRuntimeProvider").getWamRuntime();
            e
              ? e.commit(this, !1)
              : o("WAWebWamInitQueue").queueEvent(this, !1);
          }),
          (a.commitAndWaitForFlush = function (t) {
            (t === void 0 && (t = !1), this.runPreCommitValidation());
            var e = o("WAWebWamRuntimeProvider").getWamRuntime();
            if (e == null)
              return (
                o("WAWebWamInitQueue").queueEvent(this, t),
                (m || (m = n("Promise"))).resolve()
              );
            var r = e.commit(this, t);
            return r == null
              ? (o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "commitAndWaitForFlush called before initWamRuntime",
                    ])),
                ),
                (m || (m = n("Promise"))).resolve())
              : r;
          }),
          (a.setTime = function (t) {
            this.eventTime = t || Date.now();
          }),
          t
        );
      })(o("WAWebWamTypeHash").TypeHash),
      h = (function (t) {
        function n(n) {
          var r;
          ((r = t.call(this) || this), (r.validators = []));
          var a = n.id,
            i = n.privateStatsIdInt,
            l = n.wamChannel,
            s = n.weight,
            u = babelHelpers.objectWithoutPropertiesLoose(n, e);
          ((r.id = a),
            (r.weight = s != null ? s : 0),
            (r.wamChannel = l != null ? l : "regular"),
            i != null && (r.privateStatsIdInt = i),
            (r.$className = "RawWamEvent (" + r.id + ")"),
            (r.all = u),
            r.set(r.all));
          for (var c in r.all)
            o("WAWebWamCodegenUtils").metrics.define(
              r.$className,
              c,
              Number(c),
              "number",
            );
          return r;
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(g);
    ((l.WamEvent = g), (l.RawWamEvent = h));
  },
  98,
);
