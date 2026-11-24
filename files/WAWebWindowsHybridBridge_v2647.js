__d(
  "WAWebWindowsHybridBridge.v2647",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2647",
    "WAWebWindowsHybridBridgeAbProps.v2647",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2647",
    "WAWebWindowsHybridBridgeConnection.v2647",
    "WAWebWindowsHybridBridgeContacts.v2647",
    "WAWebWindowsHybridBridgeDebugFeatures.v2647",
    "WAWebWindowsHybridBridgeLinksPreview.v2647",
    "WAWebWindowsHybridBridgeMediaFiles.v2647",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2647",
    "WAWebWindowsHybridBridgeMetaConfig.v2647",
    "WAWebWindowsHybridBridgeNativeAppState.v2647",
    "WAWebWindowsHybridBridgeOds.v2647",
    "WAWebWindowsHybridBridgePictures.v2647",
    "WAWebWindowsHybridBridgePreferences.v2647",
    "WAWebWindowsHybridBridgeRateTheApp.v2647",
    "WAWebWindowsHybridBridgeRingtone.v2647",
    "WAWebWindowsHybridBridgeScalingControl.v2647",
    "WAWebWindowsHybridBridgeSharesheet.v2647",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2647",
    "WAWebWindowsHybridBridgeTouchpadFix.v2647",
    "WAWebWindowsHybridBridgeVoip.v2647",
    "WAWebWindowsHybridBridgeWam.v2647",
    "WAWebWindowsStartupWebTimings",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          r;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var a = e.hostObjects.AbPropsBridge;
        a != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2647",
          ).WindowsHybridBridgeAbProps_v2647)(a));
        var i = e.hostObjects.WamBridge;
        i != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2647",
          ).WindowsHybridBridgeWam_v2647)(i));
        var l = e.hostObjects.PreferencesBridge;
        l &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2647",
          ).WindowsHybridBridgePreferences_v2647)(l));
        var s = e.hostObjects.ScalingControlBridge;
        s &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2647",
          ).WindowsHybridBridgeScalingControl_v2647)(s));
        var u = e.hostObjects.OdsBridge;
        u != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2647",
          ).WindowsHybridBridgeOds_v2647)(u)),
          this.ods.initialize());
        var c = e.hostObjects.PicturesBridge;
        c &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2647",
          ).WindowsHybridBridgePictures_v2647)(c));
        var d = e.hostObjects.DebugFeaturesBridge,
          m = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        d != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2647",
            ).WindowsHybridBridgeDebugFeatures_v2647)(d))
          : m != null;
        var p = e.hostObjects.VoipBridge,
          _ = e.hostObjects.VoipSignalingBridge;
        (p &&
          _ &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2647",
          ).VoipWinRTBridge_v2647)(p, _)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2647",
          ).WAWebWindowsHybridBridgeRateTheApp_v2647)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2647",
          ).WindowsHybridBridgeConnection_v2647)(
            e.hostObjects.ConnectionBridge,
            function (e) {
              var n;
              return (n = t.abProps) == null
                ? void 0
                : n.acknowledgeExposureLoggedInUserSession(e);
            },
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2647",
          ).WindowsHybridBridgeTouchpadFix_v2647)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2647",
          ).WindowsHybridBridgeLinksPreview_v2647)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var f = e.hostObjects.sync.PopulatedContactsBridge,
            g = e.hostObjects.PopulatedContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2647",
            ).WindowsHybridBridgeContacts_v2647)(g, f, !0));
        } catch (t) {
          var h = e.hostObjects.ContactsBridge;
          h != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2647",
            ).WindowsHybridBridgeContacts_v2647)(
              h,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var y = e.hostObjects.MediaFilesBridge;
        y != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2647",
          ).WAWebWindowsHybridBridgeMediaFiles_v2647)(y, e));
        var C = e.hostObjects.SharesheetBridge;
        C != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2647",
          ).WAWebWindowsHybridBridgeSharesheet_v2647)(C));
        var b = e.hostObjects.AppActivationBridge;
        b != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2647",
          ).WindowsHybridAppActivationBridge_v2647)(b));
        var v = e.hostObjects.NativeAppStateBridge,
          S = e.hostObjects.sync.NativeAppStateBridge;
        v != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2647",
          ).WindowsHybridBridgeNativeAppState_v2647)(v, S));
        var R = e.hostObjects.SystemIntegrationsBridge;
        R &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2647",
          ).WindowsHybridBridgeSystemIntegrations_v2647)(R));
        var L = e.hostObjects.BrowserExtensionsBridge;
        L &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2647",
          ).WindowsHybridBridgeBrowserExtensions_v2647)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2647",
          ).WindowsHybridBridgeMediaTranscoder_v2647)(e, E));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2647",
          ).WindowsHybridBridgeRingtone_v2647)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2647",
          ).WindowsHybridBridgeMetaConfig_v2647)(I)),
          this.metaConfig.initialize()),
          (r = e.hostObjects.WebUpdateBridge) == null ||
            r.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY),
          o("WAWebWindowsStartupWebTimings").markWindowsBridgeReady());
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2647 = e;
  },
  98,
);
