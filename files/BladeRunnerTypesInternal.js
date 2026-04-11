__d(
  "BladeRunnerTypesInternal",
  ["Base64", "BladeRunnerLogger", "BladeRunnerTypes"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getHeaders = function () {
            if (this.headers != null) return this.headers;
            var e = new Error("Expected headers");
            throw (e.stack, e);
          }),
          (t.getInstrumentationData = function () {
            if (
              this.instrumentationData != null &&
              this.instrumentationData.length > 0
            )
              try {
                return JSON.parse(this.instrumentationData);
              } catch (e) {
                return null;
              }
            else return null;
          }),
          (t.updateRetryRequestPayload = function (t) {
            t != null
              ? (this.payload = r("Base64").encode(t))
              : (this.payload = null);
          }),
          (e.readObject = function (n) {
            var t = new e();
            return (
              (t.streamId = f(n.streamId)),
              (t.requestType = f(n.requestType)),
              (t.payload = y(n.payload)),
              (t.headers = v(n.headers)),
              (t.extraHeader = y(n.extraHeader)),
              (t.requestTarget = y(n.requestTarget)),
              (t.instrumentationData = y(n.instrumentationData)),
              t
            );
          }),
          e
        );
      })(),
      s = (function () {
        function e() {}
        e.readObject = function (n) {
          var t = new e();
          return (
            (t.streamId = f(n.streamId)),
            (t.dataId = g(n.dataId)),
            (t.data = y(n.data)),
            (t.shouldAck = R(n.shouldAck)),
            t
          );
        };
        var t = e.prototype;
        return (
          (t.rawData = function () {
            if (this.data == null) {
              var e = new Error("Expected data");
              throw (e.stack, e);
            }
            return this.data;
          }),
          (t.rawDataSize = function () {
            return this.data == null ? 0 : this.data.length;
          }),
          (t.decodeData = function () {
            if (this.data == null) {
              var e = new Error("Expected data");
              throw (e.stack, e);
            }
            return r("Base64").decode(this.data);
          }),
          (t.setData = function (t) {
            this.data = r("Base64").encode(t);
          }),
          (t.getInstrumentationData = function () {
            return this.instrumentationData != null
              ? JSON.parse(this.instrumentationData)
              : null;
          }),
          e
        );
      })(),
      u = (function () {
        function e() {}
        return (
          (e.readObject = function (n) {
            var t = new e();
            return (
              (t.streamId = f(n.streamId)),
              (t.dataId = f(n.dataId)),
              (t.success = S(n.success)),
              (t.message = y(n.message)),
              (t.code = g(n.code)),
              t
            );
          }),
          e
        );
      })();
    ((u.ACK_CODE_LANDED_AND_ACCEPTED = 20),
      (u.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21),
      (u.ACK_CODE_FAILED_TO_LAND = 50));
    var c = (function () {
        function e() {}
        return (
          (e.readObject = function (n) {
            var t = new e();
            return (
              (t.streamId = g(n.streamId)),
              (t.message = y(n.message)),
              t
            );
          }),
          e
        );
      })(),
      d = (function () {
        function e() {}
        return (
          (e.readObject = function (n) {
            var t = new e();
            return (
              (t.streamId = f(n.streamId)),
              (t.status = f(n.status)),
              (t.message = y(n.message)),
              (t.code = g(n.code)),
              (t.shouldRetry = R(n.shouldRetry)),
              (t.retryDelayMs = g(n.retryDelayMs)),
              t
            );
          }),
          e
        );
      })(),
      m = (function () {
        function e() {}
        return (
          (e.readObject = function (n) {
            var t = new e();
            return (
              (t.streamId = f(n.streamId)),
              (t.newBody = y(n.newBody)),
              (t.newExtraHeader = y(n.newExtraHeader)),
              (t.patchExtraHeader = y(n.patchExtraHeader)),
              (t.killBody = R(n.killBody)),
              (t.temporary = R(n.temporary)),
              t
            );
          }),
          e
        );
      })(),
      p = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getRequest = function () {
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.REQUEST &&
              this.request != null
            )
              return this.request;
            var e = new Error("Expected request");
            throw (e.stack, e);
          }),
          (n.getData = function () {
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.DATA &&
              this.data != null
            )
              return this.data;
            var e = new Error("Expected data");
            throw (e.stack, e);
          }),
          (n.getDataAck = function () {
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
              this.dataAck != null
            )
              return this.dataAck;
            var e = new Error("Expected dataAck");
            throw (e.stack, e);
          }),
          (n.getStatusUpdate = function () {
            if (
              this.type ==
                o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE &&
              this.statusUpdate != null
            )
              return this.statusUpdate;
            var e = new Error("Expected status update");
            throw (e.stack, e);
          }),
          (n.getLog = function () {
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.LOG &&
              this.log != null
            )
              return this.log;
            var e = new Error("Expected log");
            throw (e.stack, e);
          }),
          (n.getRewriteRequest = function () {
            if (
              this.type ==
                o("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST &&
              this.rewriteRequest != null
            )
              return this.rewriteRequest;
            var e = new Error("Expected rewrite request");
            throw (e.stack, e);
          }),
          (n.getStreamId = function () {
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.REQUEST &&
              this.request != null
            )
              return this.request.streamId;
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.DATA &&
              this.data != null
            )
              return this.data.streamId;
            if (
              this.type ==
                o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE &&
              this.statusUpdate != null
            )
              return this.statusUpdate.streamId;
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.LOG &&
              this.log != null
            )
              return this.log.streamId;
            if (
              this.type ==
                o("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST &&
              this.rewriteRequest != null
            )
              return this.rewriteRequest.streamId;
            if (
              this.type == o("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
              this.dataAck != null
            )
              return this.dataAck.streamId;
            var e = new Error("Frame with unexpected type");
            throw (e.stack, e);
          }),
          (n.isInstrumented = function () {
            return this.type === o("BladeRunnerTypes").StreamFrameType.REQUEST
              ? this.getRequest().instrumentationData != null
              : this.type === o("BladeRunnerTypes").StreamFrameType.DATA
                ? this.getData().instrumentationData != null
                : !1;
          }),
          (t.readObject = function (a) {
            var n = new t();
            switch (((n.type = f(a.type)), n.type)) {
              case o("BladeRunnerTypes").StreamFrameType.REQUEST:
                n.request = e.readObject(C(a.request));
                break;
              case o("BladeRunnerTypes").StreamFrameType.DATA:
                n.data = s.readObject(C(a.data));
                break;
              case o("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                n.dataAck = u.readObject(C(a.dataAck));
                break;
              case o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                n.statusUpdate = d.readObject(C(a.statusUpdate));
                break;
              case o("BladeRunnerTypes").StreamFrameType.LOG:
                n.log = c.readObject(C(a.log));
                break;
              case o("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                n.rewriteRequest = m.readObject(C(a.rewriteRequest));
                break;
              default:
                return (
                  r("BladeRunnerLogger").warn(
                    "Frame with unexpected type: " + n.type,
                  ),
                  null
                );
            }
            return n;
          }),
          (t.newRequestFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.REQUEST),
              (e.request = n),
              e
            );
          }),
          (t.newDataFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.DATA),
              (e.data = n),
              e
            );
          }),
          (t.newDataAckFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.DATA_ACK),
              (e.dataAck = n),
              e
            );
          }),
          (t.newStatusUpdateFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE),
              (e.statusUpdate = n),
              e
            );
          }),
          (t.newLogFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.LOG),
              (e.log = n),
              e
            );
          }),
          (t.newRewriteRequestFrame = function (n) {
            var e = new t();
            return (
              (e.type = o("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST),
              (e.rewriteRequest = n),
              e
            );
          }),
          t
        );
      })(),
      _ = (function () {
        function e(e, t, n) {
          ((this.batchId = e),
            (this.frames = t),
            (this.instrumentationData = n));
        }
        var t = e.prototype;
        return (
          (t.getFrames = function () {
            if (this.frames != null) return this.frames;
            var e = new Error("Expected frames");
            throw (e.stack, e);
          }),
          (t.getInstrumentationData = function () {
            if (this.instrumentationData != null)
              try {
                return JSON.parse(this.instrumentationData);
              } catch (e) {
                return null;
              }
            else return null;
          }),
          (t.getInstrumentationDataDfTraceId = function () {
            if (this.instrumentationData != null)
              try {
                var e,
                  t = JSON.parse(this.instrumentationData);
                return (e = t.dataFlowTracingData) == null ? void 0 : e.traceId;
              } catch (e) {
                return null;
              }
            else return null;
          }),
          (t.write = function () {
            return JSON.stringify(this);
          }),
          (t.isInstrumented = function () {
            return this.getFrames().some(function (e) {
              return e.isInstrumented();
            });
          }),
          (e.read = function (n) {
            var t = JSON.parse(n),
              r = t.batchId || 0,
              o = [];
            for (var a of t.frames) {
              var i = p.readObject(a);
              i != null && o.push(i);
            }
            var l = t.instrumentationData || null;
            return new e(r, o, l);
          }),
          e
        );
      })();
    function f(e) {
      if (typeof e == "number") return e;
      var t = new Error("Expected number");
      throw (t.stack, t);
    }
    function g(e) {
      return e == null ? null : f(e);
    }
    function h(e) {
      if (typeof e == "string") return e;
      var t = new Error("Expected string");
      throw (t.stack, t);
    }
    function y(e) {
      return e == null ? null : h(e);
    }
    function C(e) {
      if (typeof e == "object" && e != null) return e;
      var t = new Error("Expected object");
      throw (t.stack, t);
    }
    function b(e) {
      if (typeof e == "object" && e != null) {
        var t = e,
          n = {};
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            typeof r == "string" && r != null && (n[e] = r);
          }),
          n
        );
      }
      var r = new Error("Expected string map");
      throw (r.stack, r);
    }
    function v(e) {
      return e == null ? null : b(e);
    }
    function S(e) {
      if (typeof e == "boolean" && e != null) return e;
      var t = new Error("Expected boolean");
      throw (t.stack, t);
    }
    function R(e) {
      return e == null ? null : S(e);
    }
    ((l.GatewayStreamRequest = e),
      (l.GatewayStreamData = s),
      (l.GatewayStreamDataAck = u),
      (l.GatewayStreamLog = c),
      (l.GatewayStreamStatusUpdate = d),
      (l.GatewayStreamRewriteRequest = m),
      (l.GatewayStreamFrame = p),
      (l.GatewayStreamBatch = _));
  },
  98,
);
