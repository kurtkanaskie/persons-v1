var id = context.getVariable( "personId" );
var person = JSON.parse( request.content );
var persons = JSON.parse( context.getVariable( "persons") );
// { "persons": [ { ... } ] }
var arr = persons.persons;
print ("arr: " + JSON.stringify(arr));

var found = false;
for ( i=0; i<arr.length; i++ ) {
	 if( arr[i].id == id ) {
		 print( "Updating " + JSON.stringify(arr[i]) );
		 found = true;
		 arr[i] = person;
		 break;
	 }
}
 
if( !found ) {
    print( "Creating " + JSON.stringify(person));
    arr.push(person);
}
 
context.setVariable( "person", JSON.stringify(person));
context.setVariable( "persons", JSON.stringify(persons));