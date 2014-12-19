<cfparam name="url.name" default="">
<!--- form scope overrules url scope --->
<cfif structKeyExists(form, "name")>
	<cfset url.name = form.name>
</cfif>
<cfoutput>#reverse(url.name)#</cfoutput>