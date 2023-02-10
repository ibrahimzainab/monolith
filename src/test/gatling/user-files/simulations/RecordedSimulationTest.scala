
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseURL("http://detectportal.firefox.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.(t|o)tf""", """.*\.png"""), WhiteList())
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0")

	val headers_0 = Map("Pragma" -> "no-cache")



	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/canonical.html")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/success.txt?ipv4")
			.headers(headers_0),
            http("request_2")
			.get("/success.txt?ipv6")
			.headers(headers_0)))
		.pause(1)
		.exec(http("request_3")
			.get("/canonical.html")
			.headers(headers_0)
			.resources(http("request_4")
			.get("/success.txt?ipv4")
			.headers(headers_0),
            http("request_5")
			.get("/success.txt?ipv6")
			.headers(headers_0)))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}