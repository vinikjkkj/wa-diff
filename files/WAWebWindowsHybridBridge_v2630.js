__d(
  "WAWebWindowsHybridBridge.v2630",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2630",
    "WAWebWindowsHybridBridgeAbProps.v2630",
    "WAWebWindowsHybridBridgeAdv.v2630",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2630",
    "WAWebWindowsHybridBridgeConnection.v2630",
    "WAWebWindowsHybridBridgeContacts.v2630",
    "WAWebWindowsHybridBridgeDebugFeatures.v2630",
    "WAWebWindowsHybridBridgeLinksPreview.v2630",
    "WAWebWindowsHybridBridgeMediaFiles.v2630",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2630",
    "WAWebWindowsHybridBridgeMetaConfig.v2630",
    "WAWebWindowsHybridBridgeNativeAppState.v2630",
    "WAWebWindowsHybridBridgeOds.v2630",
    "WAWebWindowsHybridBridgePictures.v2630",
    "WAWebWindowsHybridBridgePreferences.v2630",
    "WAWebWindowsHybridBridgeRateTheApp.v2630",
    "WAWebWindowsHybridBridgeRingtone.v2630",
    "WAWebWindowsHybridBridgeScalingControl.v2630",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2630",
    "WAWebWindowsHybridBridgeSharesheet.v2630",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2630",
    "WAWebWindowsHybridBridgeTouchpadFix.v2630",
    "WAWebWindowsHybridBridgeVoip.v2630",
    "WAWebWindowsHybridBridgeWam.v2630",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2630",
          ).WindowsHybridBridgeAbProps_v2630)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2630",
          ).WindowsHybridBridgeWam_v2630)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2630",
          ).WindowsHybridBridgePreferences_v2630)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2630",
          ).WindowsHybridBridgeScalingControl_v2630)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2630",
          ).WindowsHybridBridgeOds_v2630)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2630",
          ).WindowsHybridBridgePictures_v2630)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2630",
            ).WindowsHybridBridgeDebugFeatures_v2630)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2630",
          ).VoipWinRTBridge_v2630)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2630",
          ).WAWebWindowsHybridBridgeRateTheApp_v2630)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2630",
          ).WindowsHybridBridgeConnection_v2630)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2630",
          ).WindowsHybridBridgeTouchpadFix_v2630)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2630",
          ).WindowsHybridBridgeLinksPreview_v2630)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2630",
            ).WindowsHybridBridgeContacts_v2630)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2630",
            ).WindowsHybridBridgeContacts_v2630)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2630",
          ).WAWebWindowsHybridBridgeMediaFiles_v2630)(h));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2630",
          ).WAWebWindowsHybridBridgeSharesheet_v2630)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2630",
          ).WindowsHybridAppActivationBridge_v2630)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2630",
          ).WindowsHybridBridgeNativeAppState_v2630)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2630",
          ).WindowsHybridBridgeSystemIntegrations_v2630)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2630",
          ).WindowsHybridBridgeBrowserExtensions_v2630)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2630",
          ).WindowsHybridBridgeSeamlessMigration_v2630)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2630",
          ).WindowsHybridBridgeMediaTranscoder_v2630)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2630",
          ).WindowsHybridBridgeAdv_v2630)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2630",
          ).WindowsHybridBridgeRingtone_v2630)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2630",
          ).WindowsHybridBridgeMetaConfig_v2630)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
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
    l.WindowsHybridBridge_v2630 = e;
  },
  98,
);
