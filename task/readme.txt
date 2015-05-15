The Final Project Task

The result of the sample task should be a working system for forming and monitoring project teams, which must include controllers, directives, services, and filters.

The system must be implemented as a Single Page Application (SPA). The main page should be divided into two areas, the left one for adding staff to teams and the right one for showing a list of teams with their current members (take a look at the mockups, the list should be implemented using the “collapse” control element). The left area should have two tabs, each of which with its own state to help navigate between them. Because of this, you should use routing when implementing it.

The system’s behavior must meet the following requirements:

The left half is responsible for adding employees to the teams in the right half. That way, if we want to add an employee to a team, we must have at least one team on the right side.

Adding teams should be implemented using an input element located above the list of teams. When user adds a new team, the name must be validated using the following rules:

It must be at least one symbol long
It can include only Latin characters and numbers
If the validation criteria aren’t met, the “add” button to the right of the input area should not be active.

After a user highlights a team on the right side, there are two ways to add employees using the left side.

If the first tab is selected, it should have the Typeahead user element located on it, which lets users search for employees by name, specialization, and grade (the data should be taken from the provided service).

When an employee is chosen using the Typeahead, they are automatically added to the Tagmanager.

If the Tagmanager has at least one employee, the “refresh” button to the right of the input field (see mockup) becomes active and allows users to sync the two halves.

When users delete employees from the right side, they must be automatically deleted from the left element of the Tagmanager as well.

If you add or delete users from the left side, the right should only sync after the “Refresh” button is pressed.

You can also add employees using the second tab by simply choosing members from the table.

If the employee input line from the table is pressed, a line with feedback on them  appears below it (you can also add animation). 

Also, when you hover your mouse over an employee’s name, a tooltip should appear detailing their grade and specialization.


The Useful Links:
- https://github.com/javascript-awesome/angular-seed
- http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/
- http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript
- http://liamkaufman.com/blog/2013/05/13/understanding-angularjs-directives-part1-ng-repeat-and-compile/
- https://github.com/javascript-awesome/angular/blob/master/Communication-between-controllers.md