__d(
  "WAWebWindowsHybridBridge.v2642",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2642",
    "WAWebWindowsHybridBridgeAbProps.v2642",
    "WAWebWindowsHybridBridgeAdv.v2642",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2642",
    "WAWebWindowsHybridBridgeConnection.v2642",
    "WAWebWindowsHybridBridgeContacts.v2642",
    "WAWebWindowsHybridBridgeDebugFeatures.v2642",
    "WAWebWindowsHybridBridgeLinksPreview.v2642",
    "WAWebWindowsHybridBridgeMediaFiles.v2642",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2642",
    "WAWebWindowsHybridBridgeMetaConfig.v2642",
    "WAWebWindowsHybridBridgeNativeAppState.v2642",
    "WAWebWindowsHybridBridgeOds.v2642",
    "WAWebWindowsHybridBridgePictures.v2642",
    "WAWebWindowsHybridBridgePreferences.v2642",
    "WAWebWindowsHybridBridgeRateTheApp.v2642",
    "WAWebWindowsHybridBridgeRingtone.v2642",
    "WAWebWindowsHybridBridgeScalingControl.v2642",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2642",
    "WAWebWindowsHybridBridgeSharesheet.v2642",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2642",
    "WAWebWindowsHybridBridgeTouchpadFix.v2642",
    "WAWebWindowsHybridBridgeVoip.v2642",
    "WAWebWindowsHybridBridgeWam.v2642",
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
            "WAWebWindowsHybridBridgeAbProps.v2642",
          ).WindowsHybridBridgeAbProps_v2642)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2642",
          ).WindowsHybridBridgeWam_v2642)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2642",
          ).WindowsHybridBridgePreferences_v2642)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2642",
          ).WindowsHybridBridgeScalingControl_v2642)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2642",
          ).WindowsHybridBridgeOds_v2642)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2642",
          ).WindowsHybridBridgePictures_v2642)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2642",
            ).WindowsHybridBridgeDebugFeatures_v2642)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2642",
          ).VoipWinRTBridge_v2642)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2642",
          ).WAWebWindowsHybridBridgeRateTheApp_v2642)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2642",
          ).WindowsHybridBridgeConnection_v2642)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2642",
          ).WindowsHybridBridgeTouchpadFix_v2642)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2642",
          ).WindowsHybridBridgeLinksPreview_v2642)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2642",
            ).WindowsHybridBridgeContacts_v2642)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2642",
            ).WindowsHybridBridgeContacts_v2642)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2642",
          ).WAWebWindowsHybridBridgeMediaFiles_v2642)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2642",
          ).WAWebWindowsHybridBridgeSharesheet_v2642)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2642",
          ).WindowsHybridAppActivationBridge_v2642)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2642",
          ).WindowsHybridBridgeNativeAppState_v2642)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2642",
          ).WindowsHybridBridgeSystemIntegrations_v2642)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2642",
          ).WindowsHybridBridgeBrowserExtensions_v2642)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2642",
          ).WindowsHybridBridgeSeamlessMigration_v2642)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2642",
          ).WindowsHybridBridgeMediaTranscoder_v2642)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2642",
          ).WindowsHybridBridgeAdv_v2642)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2642",
          ).WindowsHybridBridgeRingtone_v2642)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2642",
          ).WindowsHybridBridgeMetaConfig_v2642)(I)),
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
    l.WindowsHybridBridge_v2642 = e;
  },
  98,
);
