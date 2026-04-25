__d(
  "WAWebConversionTupleModel",
  [
    "WABinary",
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebBaseModel",
    "WAWebConversionTupleCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["conversionData"],
      s,
      u = 604800,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.conversionData = o("WAWebBaseModel").prop()),
            (e.conversionSource = o("WAWebBaseModel").prop()),
            (e.ctwaSignals = o("WAWebBaseModel").prop()),
            (e.fromMe = o("WAWebBaseModel").prop()),
            (e.timestamp = o("WAWebBaseModel").prop(function () {
              return o("WATimeUtils").unixTime();
            })),
            (e.alarmId = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.listenTo(this, "change:timestamp", function () {
                return e.$ConversionTupleImpl$p_1();
              }),
              this.$ConversionTupleImpl$p_1());
          }),
          (a.$ConversionTupleImpl$p_1 = function () {
            var e = this,
              t = this.timestamp + u;
            if (t < 0) {
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid conversionTuple timer",
                  ])),
              ),
                this.delete());
              return;
            }
            this.alarmId = r("WAWebAlarm").setLocalTimeout(
              function () {
                e.delete();
              },
              t * 1e3,
              this.alarmId,
            );
          }),
          (a.$ConversionTupleImpl$p_2 = function () {
            this.alarmId != null &&
              (r("WAWebAlarm").clearTimeout(this.alarmId),
              (this.alarmId = void 0));
          }),
          (a.toJSON = function () {
            var t = this.serialize(),
              n = t.conversionData,
              r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            if (n instanceof ArrayBuffer) {
              var a = new (o("WABinary").Binary)(n);
              r.conversionData = a.readString(n.byteLength);
            }
            return r;
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              this.getCollection().remove(this.id),
              this.$ConversionTupleImpl$p_2());
          }),
          (a.getCollection = function () {
            return r("WAWebConversionTupleCollection");
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((c.Proxy = "conversionTuple"), (c.idClass = r("WAWebWid")));
    var d = o("WAWebBaseModel").defineModel(c);
    ((l.ConversionTupleExpiry = u), (l.ConversionTuple = d));
  },
  98,
);
